"use client";

import { Moon, Sun, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useTheme } from '@/components/theme-provider';
import { useState } from 'react';

export function ThemeSelector() {
  const { theme, colorTheme, setTheme, setColorTheme } = useTheme();
  const [showColorPicker, setShowColorPicker] = useState(false);

  const colorOptions = [
    { name: 'blue', color: 'bg-blue-500', label: 'Ocean' },
    { name: 'green', color: 'bg-green-500', label: 'Forest' },
    { name: 'purple', color: 'bg-purple-500', label: 'Violet' },
    { name: 'orange', color: 'bg-orange-500', label: 'Sunset' },
    { name: 'pink', color: 'bg-pink-500', label: 'Blossom' },
  ];

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      <div className="relative">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setShowColorPicker(!showColorPicker)}
          className="bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background/90"
        >
          <Palette className="h-4 w-4" />
        </Button>
        
        {showColorPicker && (
          <Card className="absolute top-12 right-0 p-3 bg-background/95 backdrop-blur-md border-border/50 min-w-[160px]">
            <div className="space-y-2">
              <p className="text-xs font-medium text-muted-foreground">Color Theme</p>
              <div className="grid grid-cols-1 gap-2">
                {colorOptions.map((option) => (
                  <button
                    key={option.name}
                    onClick={() => setColorTheme(option.name as any)}
                    className={`flex items-center gap-2 p-2 rounded-md transition-colors hover:bg-muted/50 ${
                      colorTheme === option.name ? 'bg-muted' : ''
                    }`}
                  >
                    <div className={`w-3 h-3 rounded-full ${option.color}`} />
                    <span className="text-sm">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </Card>
        )}
      </div>
      
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background/90"
      >
        {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </Button>
    </div>
  );
}