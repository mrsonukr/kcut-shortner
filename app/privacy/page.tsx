"use client";

import { ArrowLeft, Shield, Eye, Lock, Database, Globe, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function PrivacyPage() {
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
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
          </div>

          {/* Last Updated */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 mb-8">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4" />
                <span>Last updated: January 27, 2025</span>
              </div>
            </CardContent>
          </Card>

          {/* Introduction */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-primary" />
                Our Commitment to Privacy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                At KCut.in, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your information when you use our URL shortening service.
              </p>
              <p className="text-muted-foreground">
                We believe in transparency and your right to control your personal data. This policy outlines our practices in clear, understandable terms.
              </p>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5 text-primary" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Information You Provide</h4>
                <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                  <li>• URLs you submit for shortening</li>
                  <li>• Custom slugs you create</li>
                  <li>• Contact information (if you reach out to support)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Automatically Collected Information</h4>
                <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                  <li>• IP address and location data</li>
                  <li>• Browser type and version</li>
                  <li>• Device information</li>
                  <li>• Usage patterns and click data</li>
                  <li>• Referrer information</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Cookies and Tracking</h4>
                <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                  <li>• Essential cookies for service functionality</li>
                  <li>• Analytics cookies to improve our service</li>
                  <li>• No third-party advertising cookies</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Service Provision</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                    <li>• Create and manage short links</li>
                    <li>• Redirect users to destination URLs</li>
                    <li>• Prevent abuse and spam</li>
                    <li>• Provide customer support</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Analytics and Improvement</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                    <li>• Analyze usage patterns to improve our service</li>
                    <li>• Generate aggregate statistics</li>
                    <li>• Monitor service performance</li>
                    <li>• Detect and prevent fraud</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-primary" />
                Data Protection & Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Security Measures</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                    <li>• End-to-end SSL encryption</li>
                    <li>• Secure data centers with 24/7 monitoring</li>
                    <li>• Regular security audits and updates</li>
                    <li>• Access controls and authentication</li>
                    <li>• Data backup and recovery systems</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Data Retention</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                    <li>• Short links are stored indefinitely unless deleted</li>
                    <li>• Analytics data is retained for 24 months</li>
                    <li>• Log files are automatically deleted after 90 days</li>
                    <li>• You can request deletion of your data at any time</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Your Rights & Choices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  You have the following rights regarding your personal data:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Access & Control</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Request access to your data</li>
                      <li>• Update or correct information</li>
                      <li>• Delete your short links</li>
                      <li>• Export your data</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Privacy Controls</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Opt out of analytics</li>
                      <li>• Disable cookies</li>
                      <li>• Request data deletion</li>
                      <li>• Withdraw consent</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Third Parties */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 mb-8">
            <CardHeader>
              <CardTitle>Third-Party Services</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  We use select third-party services to provide and improve our service:
                </p>
                
                <div>
                  <h4 className="font-semibold mb-2">Infrastructure Partners</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                    <li>• Cloudflare (CDN and security)</li>
                    <li>• Cloud hosting providers</li>
                    <li>• Analytics services (anonymized data only)</li>
                  </ul>
                </div>

                <p className="text-sm text-muted-foreground">
                  We ensure all partners meet our strict privacy and security standards.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                If you have questions about this Privacy Policy or want to exercise your rights, please contact us:
              </p>
              
              <div className="space-y-2 text-sm">
                <p><strong>Email:</strong> privacy@kcut.in</p>
                <p><strong>Response Time:</strong> Within 48 hours</p>
                <p><strong>Data Protection Officer:</strong> Available upon request</p>
              </div>
              
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> This privacy policy may be updated from time to time. We will notify users of significant changes via email or website notice.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}