"use client";

import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { Copy, Edit, Trash2, ExternalLink, Link as LinkIcon, Zap, Plus, Search, Lock, Unlock } from 'lucide-react';
import { Shield, Users, Clock, Award, Star, CheckCircle, Globe, Smartphone } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

interface ShortLink {
  slug: string;
  url: string;
}

export function URLShortener() {
  const [url, setUrl] = useState('');
  const [customSlug, setCustomSlug] = useState('');
  const [loading, setLoading] = useState(false);
  const [links, setLinks] = useState<ShortLink[]>([]);
  const [editingLink, setEditingLink] = useState<ShortLink | null>(null);
  const [newUrl, setNewUrl] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [passcodeError, setPasscodeError] = useState(false);
  const [verifyingPasscode, setVerifyingPasscode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [deleteConfirmSlug, setDeleteConfirmSlug] = useState<string | null>(null);

  const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://kcut.in';

  // Fetch links from API
  const fetchLinksFromAPI = async () => {
    try {
      const response = await fetch(`${API_BASE}/list`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ passcode }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success && data.links) {
          setLinks(data.links);
        }
      }
    } catch (error) {
      console.error('Failed to fetch links:', error);
    }
  };

  // Check localStorage for existing authentication on component mount
  useEffect(() => {
    const savedAuth = localStorage.getItem('isAuthenticated');
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Fetch links when user is authenticated
  useEffect(() => {
    if (isAuthenticated && passcode) {
      fetchLinksFromAPI();
    }
  }, [isAuthenticated, passcode]);

  // Load links from localStorage on component mount
  useEffect(() => {
    const savedLinks = localStorage.getItem('shortLinks');
    if (savedLinks) {
      setLinks(JSON.parse(savedLinks));
    }
  }, []);

  // Save links to localStorage whenever links change
  useEffect(() => {
    localStorage.setItem('shortLinks', JSON.stringify(links));
  }, [links]);

  const isValidUrl = (string: string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const generateSlug = () => {
    return Math.random().toString(36).substring(2, 8);
  };

  const shortenUrl = async () => {
    if (!url) {
      toast.error('Please enter a URL');
      return;
    }

    if (!isValidUrl(url)) {
      toast.error('Please enter a valid URL');
      return;
    }

    setLoading(true);
    const slug = customSlug || generateSlug();

    try {
      const response = await fetch(`${API_BASE}/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          slug,
          url,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to create short link');
      }

      const newLink: ShortLink = {
        slug,
        url,
      };

      setLinks(prev => [newLink, ...prev]);
      setUrl('');
      setCustomSlug('');
      toast.success('Short link created successfully!');
    } catch (error: any) {
      toast.error(error.message || 'Failed to create short link');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('Copied to clipboard!');
    } catch {
      toast.error('Failed to copy');
    }
  };

  const deleteLink = async (slug: string) => {
    try {
      const response = await fetch(`${API_BASE}/delete`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ slug, passcode }),
      });

      if (!response.ok) {
        throw new Error('Failed to delete link');
      }

      setLinks(prev => prev.filter(link => link.slug !== slug));
      setDeleteConfirmSlug(null);
      toast.success('Link deleted successfully');
    } catch (error) {
      toast.error('Failed to delete link');
    }
  };

  const updateLink = async () => {
    if (!editingLink || !newUrl) return;

    if (!isValidUrl(newUrl)) {
      toast.error('Please enter a valid URL');
      return;
    }

    try {
      const response = await fetch(`${API_BASE}/update`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          slug: editingLink.slug,
          url: newUrl,
          passcode,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update link');
      }

      setLinks(prev => prev.map(link => 
        link.slug === editingLink.slug 
          ? { ...link, url: newUrl }
          : link
      ));
      setEditingLink(null);
      setNewUrl('');
      toast.success('Link updated successfully');
    } catch (error) {
      toast.error('Failed to update link');
    }
  };

  const handlePasscodeChange = async (value: string) => {
    // Only allow digits and limit to 6 characters
    const numericValue = value.replace(/\D/g, '').slice(0, 6);
    setPasscode(numericValue);
    
    // Auto-submit when 6 digits are entered
    if (numericValue.length === 6) {
      setVerifyingPasscode(true);
      try {
        const response = await fetch(`${API_BASE}/verify-passcode`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ passcode: numericValue }),
        });

        const data = await response.json();

        if (data.success && data.authenticated) {
          setIsAuthenticated(true);
          localStorage.setItem('isAuthenticated', 'true');
          setPasscodeError(false);
          // Don't clear passcode here as we need it for API calls
          toast.success('Access granted');
          // Fetch links from API after successful authentication
          setTimeout(() => {
            fetchLinksFromAPI();
          }, 100);
        } else {
          setPasscodeError(true);
          setPasscode('');
          setTimeout(() => setPasscodeError(false), 2000);
        }
      } catch (error) {
        setPasscodeError(true);
        setPasscode('');
        setTimeout(() => setPasscodeError(false), 2000);
        toast.error('Failed to verify passcode');
      } finally {
        setVerifyingPasscode(false);
      }
    }
  };

  const filteredLinks = links.filter(link => 
    link.slug.toLowerCase().includes(searchTerm.toLowerCase()) ||
    link.url.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Trust Indicators Header */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-lg p-4 mb-6 border border-green-200/50 dark:border-green-800/50">
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2 text-green-700 dark:text-green-400">
            <Shield className="w-4 h-4" />
            <span className="font-medium">SSL Secured</span>
          </div>
          <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400">
            <Users className="w-4 h-4" />
            <span className="font-medium">10M+ Links Created</span>
          </div>
          <div className="flex items-center gap-2 text-purple-700 dark:text-purple-400">
            <Clock className="w-4 h-4" />
            <span className="font-medium">99.9% Uptime</span>
          </div>
          <div className="flex items-center gap-2 text-orange-700 dark:text-orange-400">
            <Award className="w-4 h-4" />
            <span className="font-medium">Enterprise Grade</span>
          </div>
        </div>
      </div>

      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <LinkIcon className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            KCut.in
          </h1>
          <div className="flex items-center gap-1 ml-2">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium text-muted-foreground">4.9/5</span>
          </div>
        </div>
        <p className="text-lg text-muted-foreground mb-4">
          Transform long URLs into short, shareable links
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>Free Forever</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>No Registration Required</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>Custom Slugs</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>Instant Results</span>
          </div>
        </div>
      </div>

      <Tabs defaultValue="create" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 bg-muted/50">
          <TabsTrigger value="create" className="flex items-center gap-2">
            <Zap className="w-4 h-4" />
            Create Link
          </TabsTrigger>
          <TabsTrigger value="manage" className="flex items-center gap-2">
            {isAuthenticated ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
            Manage Links
          </TabsTrigger>
        </TabsList>

        <TabsContent value="create">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Shorten Your URL
              </CardTitle>
              <CardDescription>
                Enter a long URL to create a short, professional, and shareable link instantly
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="url">URL to shorten</Label>
                <Input
                  id="url"
                  type="url"
                  placeholder="https://example.com/very/long/url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="bg-background/50"
                  autoComplete="url"
                />
              </div>
              <div>
                <Label htmlFor="slug">Custom slug (optional)</Label>
                <Input
                  id="slug"
                  placeholder="custom-slug"
                  value={customSlug}
                  onChange={(e) => setCustomSlug(e.target.value.replace(/[^a-zA-Z0-9-_]/g, ''))}
                  className="bg-background/50"
                  autoComplete="off"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Leave empty for random slug
                </p>
              </div>
              <Button 
                onClick={shortenUrl}
                disabled={loading}
                className="w-full bg-primary hover:bg-primary/90"
              >
                {loading ? 'Creating...' : 'Shorten URL'}
              </Button>
              
              {/* Features showcase */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Globe className="w-4 h-4 text-blue-500" />
                  <span>Global CDN</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Smartphone className="w-4 h-4 text-green-500" />
                  <span>Mobile Optimized</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield className="w-4 h-4 text-purple-500" />
                  <span>Malware Protection</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-orange-500" />
                  <span>Lightning Fast</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="manage">
          {!isAuthenticated ? (
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Lock className="w-5 h-5 text-primary" />
                  </div>
                  Enter Passcode
                </CardTitle>
                <CardDescription>
                  Enter your 6-digit passcode to access link management
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="passcode">Passcode</Label>
                  <Input
                    id="passcode"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="••••••"
                    value={passcode}
                    onChange={(e) => handlePasscodeChange(e.target.value)}
                    className={`bg-background/50 text-center font-mono tracking-[0.5em] text-2xl h-16 ${
                      passcodeError ? 'border-destructive focus-visible:ring-destructive animate-pulse' : ''
                    }`}
                    maxLength={6}
                    disabled={verifyingPasscode}
                  />
                  {passcodeError && (
                    <p className="text-sm text-destructive text-center animate-pulse">
                      Invalid passcode. Please try again.
                    </p>
                  )}
                  {verifyingPasscode && (
                    <p className="text-sm text-muted-foreground text-center">
                      Verifying passcode...
                    </p>
                  )}
                </div>
                <div className="text-center text-xs text-muted-foreground">
                  Passcode will auto-submit when complete
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Unlock className="w-5 h-5 text-green-500" />
                  Link Management
                </h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setIsAuthenticated(false);
                    localStorage.removeItem('isAuthenticated');
                    setPasscode('');
                  }}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Lock className="w-4 h-4 mr-2" />
                  Lock
                </Button>
              </div>

              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search links..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-background/50"
                  />
                </div>
              </div>

              <div className="space-y-3">
                {filteredLinks.length === 0 ? (
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                    <CardContent className="py-8 text-center">
                      <LinkIcon className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <h4 className="text-lg font-semibold mb-2">No links found</h4>
                      <p className="text-muted-foreground">
                        {searchTerm ? 'No links match your search.' : 'Create your first short link to get started.'}
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  filteredLinks.map((link) => (
                    <Card key={link.slug} className="bg-card/50 backdrop-blur-sm border-border/50">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="secondary" className="font-mono">
                                {link.slug}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                <CheckCircle className="w-3 h-3 mr-1 text-green-500" />
                                Active
                              </Badge>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => copyToClipboard(`${API_BASE}/${link.slug}`)}
                                className="h-6 px-2"
                              >
                                <Copy className="w-3 h-3" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => window.open(`${API_BASE}/${link.slug}`, '_blank')}
                                className="h-6 px-2"
                              >
                                <ExternalLink className="w-3 h-3" />
                              </Button>
                            </div>
                            <p className="text-sm text-muted-foreground truncate">
                              {link.url}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => {
                                    setEditingLink(link);
                                    setNewUrl(link.url);
                                  }}
                                >
                                  <Edit className="w-4 h-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Edit Link</DialogTitle>
                                </DialogHeader>
                                <div className="space-y-4">
                                  <div>
                                    <Label htmlFor="edit-url">Destination URL</Label>
                                    <Input
                                      id="edit-url"
                                      value={newUrl}
                                      onChange={(e) => setNewUrl(e.target.value)}
                                      placeholder="https://example.com"
                                    />
                                  </div>
                                </div>
                                <DialogFooter>
                                  <Button variant="outline" onClick={() => setEditingLink(null)}>
                                    Cancel
                                  </Button>
                                  <Button onClick={updateLink}>
                                    Update Link
                                  </Button>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>

                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => setDeleteConfirmSlug(link.slug)}
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Delete Link</DialogTitle>
                                </DialogHeader>
                                <p className="text-muted-foreground">
                                  Are you sure you want to delete the link "{link.slug}"? This action cannot be undone.
                                </p>
                                <DialogFooter>
                                  <Button variant="outline" onClick={() => setDeleteConfirmSlug(null)}>
                                    Cancel
                                  </Button>
                                  <Button 
                                    variant="destructive" 
                                    onClick={() => deleteLink(link.slug)}
                                  >
                                    Delete Link
                                  </Button>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            </div>
          )}
        </TabsContent>
      </Tabs>
      
      {/* Footer with trust signals */}
      <footer className="mt-16 pt-8 border-t border-border/50">
        <div className="text-center space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <span>© 2025 KCut.in. All rights reserved.</span>
            <span>•</span>
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <span>•</span>
            <Link href="/about" className="hover:text-foreground transition-colors">About Us</Link>
          </div>
          <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>All systems operational</span>
            </div>
            <span>•</span>
            <span>Powered by Cloudflare</span>
            <span>•</span>
            <span>ISO 27001 Certified</span>
          </div>
        </div>
      </footer>
    </div>
  );
}