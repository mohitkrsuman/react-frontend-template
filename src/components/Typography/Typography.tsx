import React from "react";
import { cn } from "../../utils/helpers";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

interface StatusBadgeProps extends TypographyProps {
  status: "success" | "danger" | "warning" | "info";
}

export const PageTitle: React.FC<TypographyProps> = ({
  children,
  className,
}) => (
  <h1 className={cn("text-company-name text-gray-900 mb-4", className)}>
    {children}
  </h1>
);

export const SectionTitle: React.FC<TypographyProps> = ({
  children,
  className,
}) => (
  <h2
    className={cn(
      `text-responsive-heading font-display font-semibold text-gray-800 mb-3`,
      className
    )}
  >
    {children}
  </h2>
);

export const SubsectionTitle: React.FC<TypographyProps> = ({
  children,
  className,
}) => (
  <h3
    className={cn(
      `text-lg font-display font-medium text-gray-700 mb-2`,
      className
    )}
  >
    {children}
  </h3>
);

export const BodyText: React.FC<TypographyProps> = ({
  children,
  className,
}) => (
  <p
    className={cn(
      `text-responsive-heading font-display text-gray-700 mb-2`,
      className
    )}
  >
    {children}
  </p>
);

export const CaptionText: React.FC<TypographyProps> = ({
  children,
  className,
}) => (
  <p className={cn("text-responsive-caption text-gray-500", className)}>
    {children}
  </p>
);

// Industry-Specific Components
export const TrackingNumber: React.FC<TypographyProps> = ({
  children,
  className,
}) => (
  <span
    className={cn(
      "text-tracking-number text-blue-600 bg-blue-50 px-2 py-1 rounded",
      className
    )}
  >
    {children}
  </span>
);

export const VehicleId: React.FC<TypographyProps> = ({
  children,
  className,
}) => (
  <span className={cn("text-vehicle-id text-gray-800", className)}>
    {children}
  </span>
);

export const DashboardMetric: React.FC<TypographyProps> = ({
  children,
  className,
}) => (
  <span className={cn("text-dashboard-metric text-gray-900", className)}>
    {children}
  </span>
);

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  children,
  status,
  className,
}) => {
  const statusStyles: Record<StatusBadgeProps["status"], string> = {
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    danger: "bg-red-100 text-red-800",
    info: "bg-blue-100 text-blue-800",
  };

  return (
    <span
      className={cn(
        "text-status-badge px-2 py-1 rounded-full",
        statusStyles[status],
        className
      )}
    >
      {children}
    </span>
  );
};
