'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { NAV_ITEMS } from '@/constants/app';
import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Settings,
  Info,
  Zap,
  Menu,
  X,
} from 'lucide-react';
import { useState } from 'react';

// ============================================================
// Icon registry — maps icon string names to Lucide components.
// Avoids dynamic imports. Scales fine for <20 nav items.
// ============================================================

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Settings,
  Info,
};

// ============================================================
// Sidebar Component
// ============================================================

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  // Focus Mode: collapse when inside a mission step
  const isMissionStep = /^\/mission\/\w+\/step\/\d+/.test(pathname);
  const isEffectivelyCollapsed = collapsed || isMissionStep;

  return (
    <>
      {/* Mobile overlay */}
      {!isEffectivelyCollapsed && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setCollapsed(true)}
        />
      )}

      <aside
        className={cn(
          'flex flex-col h-screen bg-sidebar-bg border-r border-sidebar-border',
          'transition-all duration-300 ease-out z-50',
          'fixed lg:relative',
          isEffectivelyCollapsed
            ? 'w-16 -translate-x-full lg:translate-x-0'
            : 'w-[260px] translate-x-0',
        )}
      >
        {/* Logo area */}
        <div className="flex items-center gap-3 px-4 h-14 border-b border-sidebar-border shrink-0">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10">
            <Zap className="w-4 h-4 text-primary" />
          </div>
          {!isEffectivelyCollapsed && (
            <span className="text-sm font-semibold text-foreground tracking-tight">
              NEXUS Academy
            </span>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 flex flex-col gap-1 p-3 overflow-y-auto">
          {NAV_ITEMS.map((item) => {
            const Icon = ICON_MAP[item.icon];
            const isActive =
              pathname === item.href ||
              (item.href !== '/dashboard' && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium',
                  'transition-colors duration-200',
                  isActive
                    ? 'bg-sidebar-active text-primary'
                    : 'text-foreground-muted hover:bg-sidebar-hover hover:text-foreground',
                )}
              >
                {Icon && (
                  <Icon
                    className={cn(
                      'w-[18px] h-[18px] shrink-0',
                      isActive ? 'text-primary' : 'text-foreground-faint',
                    )}
                  />
                )}
                {!isEffectivelyCollapsed && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Collapse toggle (desktop only) */}
        <div className="hidden lg:flex items-center justify-center p-3 border-t border-sidebar-border">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg text-foreground-faint hover:text-foreground hover:bg-sidebar-hover transition-colors"
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? <Menu className="w-4 h-4" /> : <X className="w-4 h-4" />}
          </button>
        </div>
      </aside>

      {/* Mobile toggle button (visible when sidebar is collapsed/hidden) */}
      <button
        onClick={() => setCollapsed(false)}
        className={cn(
          'fixed top-3 left-3 z-30 p-2 rounded-lg',
          'bg-surface-elevated text-foreground-muted hover:text-foreground',
          'lg:hidden',
          !isEffectivelyCollapsed && 'hidden',
        )}
        aria-label="Open navigation"
      >
        <Menu className="w-5 h-5" />
      </button>
    </>
  );
}
