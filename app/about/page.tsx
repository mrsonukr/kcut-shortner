"use client";

import { ArrowLeft, Shield, Zap, Globe, Users, Award, CheckCircle, Heart, Target, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div className="h-6 w-px bg-border"></div>
            <h1 className="text-3xl font-bold">About KCut.in</h1>
          </div>

          {/* Hero Section */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 mb-8">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  KCut.in
                </h2>
              </div>
              <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
                The most trusted and reliable URL shortening service, designed for professionals, businesses, and individuals who value speed, security, and simplicity.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Badge variant="secondary" className="px-4 py-2">
                  <Shield className="w-4 h-4 mr-2" />
                  Enterprise Security
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Globe className="w-4 h-4 mr-2" />
                  Global CDN
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Users className="w-4 h-4 mr-2" />
                  10M+ Users
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To provide the fastest, most secure, and user-friendly URL shortening service that empowers individuals and businesses to share links with confidence and track their performance effectively.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-primary" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To become the global standard for URL shortening, making the internet more accessible and organized while maintaining the highest standards of privacy and security.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Key Features */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 mb-8">
            <CardHeader>
              <CardTitle>Why Choose KCut.in?</CardTitle>
              <CardDescription>
                Built with cutting-edge technology and designed for maximum reliability
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/20">
                    <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Enterprise Security</h4>
                    <p className="text-sm text-muted-foreground">SSL encryption, malware protection, and ISO 27001 compliance</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/20">
                    <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Lightning Fast</h4>
                    <p className="text-sm text-muted-foreground">Global CDN ensures instant redirects worldwide</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/20">
                    <Globe className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">99.9% Uptime</h4>
                    <p className="text-sm text-muted-foreground">Reliable infrastructure with redundant systems</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/20">
                    <Users className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Custom Slugs</h4>
                    <p className="text-sm text-muted-foreground">Create branded, memorable short links</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-pink-100 dark:bg-pink-900/20">
                    <Award className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">No Registration</h4>
                    <p className="text-sm text-muted-foreground">Start shortening URLs immediately</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900/20">
                    <Heart className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Free Forever</h4>
                    <p className="text-sm text-muted-foreground">Core features always free, no hidden costs</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 mb-8">
            <CardHeader>
              <CardTitle>Trusted by Millions</CardTitle>
              <CardDescription>
                Join thousands of satisfied users worldwide
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">10M+</div>
                  <div className="text-sm text-muted-foreground">Links Created</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                  <div className="text-sm text-muted-foreground">Daily Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
                  <div className="text-sm text-muted-foreground">User Rating</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technology */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 mb-8">
            <CardHeader>
              <CardTitle>Built with Modern Technology</CardTitle>
              <CardDescription>
                Powered by industry-leading infrastructure
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Infrastructure
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Cloudflare Workers for global edge computing</li>
                    <li>• Redis for high-performance caching</li>
                    <li>• Multi-region deployment</li>
                    <li>• Automatic failover systems</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Security
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• End-to-end SSL encryption</li>
                    <li>• DDoS protection</li>
                    <li>• Malware scanning</li>
                    <li>• GDPR compliant</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>
                Have questions or need support? We're here to help.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold mb-2">Support</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    24/7 customer support for all users
                  </p>
                  <Button variant="outline" size="sm">
                    Contact Support
                  </Button>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Documentation</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Comprehensive API docs and guides
                  </p>
                  <Button variant="outline" size="sm">
                    View Docs
                  </Button>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Enterprise</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Custom solutions for businesses
                  </p>
                  <Button variant="outline" size="sm">
                    Contact Sales
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}