"use client";

import { ArrowLeft, FileText, Shield, AlertTriangle, Scale, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Link from 'next/link';

export default function TermsPage() {
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
            <h1 className="text-3xl font-bold">Terms of Service</h1>
          </div>

          {/* Last Updated */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 mb-8">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <FileText className="w-4 h-4" />
                <span>Last updated: January 27, 2025</span>
              </div>
            </CardContent>
          </Card>

          {/* Important Notice */}
          <Alert className="mb-8">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              By using KCut.in, you agree to these terms. Please read them carefully before using our service.
            </AlertDescription>
          </Alert>

          {/* Introduction */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="w-5 h-5 text-primary" />
                Agreement to Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                These Terms of Service ("Terms") govern your use of KCut.in ("Service") operated by KCut.in ("us", "we", or "our").
              </p>
              <p className="text-muted-foreground">
                By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these terms, you may not access the Service.
              </p>
            </CardContent>
          </Card>

          {/* Service Description */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                Service Description
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  KCut.in is a URL shortening service that allows users to:
                </p>
                
                <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                  <li>• Create shortened versions of long URLs</li>
                  <li>• Customize short link slugs</li>
                  <li>• Manage and track their links</li>
                  <li>• Access basic analytics</li>
                </ul>

                <p className="text-muted-foreground">
                  The Service is provided "as is" and we reserve the right to modify or discontinue features at any time.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Acceptable Use */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Acceptable Use Policy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 text-green-600 dark:text-green-400">✓ Permitted Uses</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                    <li>• Shortening legitimate URLs for personal or business use</li>
                    <li>• Creating branded short links for marketing</li>
                    <li>• Sharing content on social media platforms</li>
                    <li>• Academic and research purposes</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-red-600 dark:text-red-400">✗ Prohibited Uses</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                    <li>• Linking to illegal, harmful, or malicious content</li>
                    <li>• Phishing, scams, or fraudulent activities</li>
                    <li>• Spam or unsolicited commercial messages</li>
                    <li>• Adult content without proper age verification</li>
                    <li>• Copyright infringement or piracy</li>
                    <li>• Harassment, hate speech, or discrimination</li>
                    <li>• Malware, viruses, or security threats</li>
                    <li>• Automated abuse or excessive requests</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 mb-8">
            <CardHeader>
              <CardTitle>User Responsibilities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  As a user of KCut.in, you are responsible for:
                </p>
                
                <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                  <li>• Ensuring your use complies with applicable laws</li>
                  <li>• Verifying the legitimacy of URLs you shorten</li>
                  <li>• Respecting intellectual property rights</li>
                  <li>• Maintaining the security of your account</li>
                  <li>• Reporting abuse or violations</li>
                  <li>• Using the service in good faith</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Service Availability */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 mb-8">
            <CardHeader>
              <CardTitle>Service Availability & Limitations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Availability</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                    <li>• We strive for 99.9% uptime but cannot guarantee uninterrupted service</li>
                    <li>• Maintenance windows may cause temporary unavailability</li>
                    <li>• We reserve the right to suspend service for violations</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Rate Limits</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                    <li>• Fair use limits apply to prevent abuse</li>
                    <li>• Excessive usage may result in temporary restrictions</li>
                    <li>• Enterprise users may request higher limits</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Privacy & Data */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 mb-8">
            <CardHeader>
              <CardTitle>Privacy & Data Protection</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Your privacy is important to us. Please review our Privacy Policy for detailed information about:
                </p>
                
                <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                  <li>• Data collection and usage</li>
                  <li>• Cookie policies</li>
                  <li>• Third-party integrations</li>
                  <li>• Your rights and choices</li>
                </ul>

                <div className="mt-4">
                  <Link href="/privacy">
                    <Button variant="outline" size="sm">
                      Read Privacy Policy
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 mb-8">
            <CardHeader>
              <CardTitle>Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Our Rights</h4>
                  <p className="text-sm text-muted-foreground">
                    KCut.in, our logo, and all related trademarks are owned by us. The service, including its design, functionality, and code, is protected by copyright and other intellectual property laws.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Your Content</h4>
                  <p className="text-sm text-muted-foreground">
                    You retain ownership of URLs and content you submit. By using our service, you grant us a limited license to process and display your links as necessary to provide the service.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Disclaimers */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 mb-8">
            <CardHeader>
              <CardTitle>Disclaimers & Limitations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Service Disclaimer</h4>
                  <p className="text-sm text-muted-foreground">
                    The service is provided "as is" without warranties of any kind. We do not guarantee the accuracy, reliability, or availability of the service.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Limitation of Liability</h4>
                  <p className="text-sm text-muted-foreground">
                    We shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Third-Party Content</h4>
                  <p className="text-sm text-muted-foreground">
                    We are not responsible for the content of destination URLs or any damages resulting from accessing third-party websites.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 mb-8">
            <CardHeader>
              <CardTitle>Termination</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  We may terminate or suspend your access to the service immediately, without prior notice, for any reason, including:
                </p>
                
                <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                  <li>• Violation of these Terms</li>
                  <li>• Fraudulent or illegal activity</li>
                  <li>• Abuse of the service</li>
                  <li>• Extended inactivity</li>
                </ul>

                <p className="text-muted-foreground">
                  You may discontinue using the service at any time. Upon termination, your right to use the service will cease immediately.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 mb-8">
            <CardHeader>
              <CardTitle>Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We reserve the right to modify these Terms at any time. We will notify users of significant changes via email or website notice. Continued use of the service after changes constitutes acceptance of the new Terms.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              
              <div className="space-y-2 text-sm">
                <p><strong>Email:</strong> legal@kcut.in</p>
                <p><strong>Response Time:</strong> Within 48 hours</p>
                <p><strong>Business Hours:</strong> Monday - Friday, 9 AM - 6 PM UTC</p>
              </div>
              
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Governing Law:</strong> These Terms are governed by and construed in accordance with applicable laws. Any disputes will be resolved through binding arbitration.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}