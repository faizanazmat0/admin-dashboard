import {
  LayoutDashboard,
  CalendarDays,
  MessagesSquare,
  MailOpen,
  ShoppingCart,
  GraduationCap,
  Share2,
  Trello,
  TicketPlus,
  Flag,
  Globe,
  Lock,
  User,
  Tags,
  CircleQuestionMark,
  TriangleAlert,
  Pin,
  AppWindow,
  FileText,
  Grid2x2,
  ChartLine,
  Shapes,
  Map,
  //SquareKanba,
  Layers,
  Rocket,
  Wrench,
  CupSoda,
  Palette,
  GitBranch,
} from "lucide-react";

// Dashboard dropdown items configuration
export const dashboardItems = [
  { label: "Default", href: "/dashboard/default", isActive: true },
  { label: "Analytics", href: "/dashboard/analytics" },
  { label: "CRM", href: "/dashboard/crm" },
  { label: "E commerce", href: "/dashboard/ecommerce" },
  { label: "LMS", href: "/dashboard/lms", tag: "NEW" },
  { label: "Management", href: "/dashboard/management" },
  { label: "Saas", href: "/dashboard/saas" },
  { label: "Support desk", href: "/dashboard/support", tag: "NEW" },
];

// App section items configuration
export const appItems = [
  {
    id: "calendar",
    icon: CalendarDays,
    label: "Calendar",
    hasDropdown: false,
    href: "/app/calendar",
  },
  {
    id: "chat",
    icon: MessagesSquare,
    label: "Chat",
    hasDropdown: false,
    href: "/app/chat",
  },
  {
    id: "email",
    icon: MailOpen,
    label: "Email",
    hasDropdown: true,
    dropdownItems: [
      { label: "Inbox", href: "/app/email/inbox" },
      { label: "Email Detail", href: "/app/email/email-detail" },
      { label: "Compose", href: "/app/email/compose" },
    ],
  },
  {
    id: "events",
    icon: CalendarDays,
    label: "Events",
    hasDropdown: true,
    dropdownItems: [
      { label: "Create an Event", href: "/app/events/create-an-event" },
      { label: "Event Detail", href: "/app/events/event-detail" },
      { label: "Event list", href: "/app/events/event-list" },
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    label: "E commerce",
    hasDropdown: true,
    dropdownItems: [
      { label: "Product", href: "/app/ecommerce/product" },
      { label: "Orders", href: "/app/ecommerce/orders" },
      { label: "Customers", href: "/app/ecommerce/customers" },
      { label: "Customer details", href: "/app/ecommerce/customer-details" },
      { label: "Shopping cart", href: "/app/ecommerce/shopping-cart" },
      { label: "Checkout", href: "/app/ecommerce/checkout" },
      { label: "Billing", href: "/app/ecommerce/billing" },
      { label: "Invoice", href: "/app/ecommerce/Invoice" },
    ],
  },
  {
    id: "elearning",
    icon: GraduationCap,
    label: "E learning",
    hasDropdown: true,
    tag: "NEW",
    dropdownItems: [
      { label: "Course", href: "/app/elearning/course" },
      { label: "Student overview", href: "/app/elearning/student-overview" },
      { label: "Trainer profile", href: "/app/elearning/trainer-profile" },
    ],
  },
  {
    id: "kanban",
    icon: Trello,
    label: "Kanban",
    hasDropdown: false,
    href: "/app/kanban",
  },
  {
    id: "social",
    icon: Share2,
    label: "Social",
    hasDropdown: true,
    dropdownItems: [
      { label: "Feed", href: "/app/social/feed" },
      { label: "Activity log", href: "/app/social/activity-log" },
      { label: "Notifications", href: "/app/social/notifications" },
      { label: "Followers", href: "/app/social/followers" },
    ],
  },
  {
    id: "support",
    icon: TicketPlus,
    label: "Support desk",
    hasDropdown: true,
    dropdownItems: [
      { label: "Table view", href: "/app/support/table-view" },
      { label: "Card view", href: "/app/support/card-view" },
      { label: "Contacts", href: "/app/support/contacts" },
      { label: "Contact detail", href: "/app/support/contact-details" },
      { label: "Tickets preview", href: "/app/support/tickets-preview" },
      { label: "Quick links", href: "/app/support/quick-links" },
      { label: "Reports", href: "/app/support/reports" },
    ],
  },
];

// Pages dropdown items configuration
export const pageItems = [
  {
    id: "starter",
    icon: Flag,
    label: "Starter",
    hasDropdown: false,
    href: "/starter",
  },
  {
    id: "landing",
    icon: Globe,
    label: "Landing",
    hasDropdown: false,
    href: "/landing",
  },
  {
    id: "authentication",
    icon: Lock,
    label: "Authentication",
    hasDropdown: true,
    dropdownItems: [
      { label: "Simple", href: "/authentication/simple" },
      { label: "Card", href: "/authentication/card" },
      { label: "Split", href: "/authentication/split" },
      { label: "Wizard", href: "/authentication/wizard" },
      { label: "Modal", href: "/authentication/modal" },
    ],
  },
  {
    id: "user",
    icon: User,
    label: "User",
    hasDropdown: true,
    dropdownItems: [
      { label: "Profile", href: "/user/profile" },
      { label: "Settings", href: "/user/settings" },
    ],
  },
  {
    id: "pricing",
    icon: Tags,
    label: "Pricing",
    hasDropdown: true,
    dropdownItems: [
      { label: "Pricing default", href: "/pricing/pricing-default" },
      { label: "Pricing alt", href: "/pricing/pricing-alt" },
    ],
  },
  {
    id: "faq",
    icon: CircleQuestionMark,
    label: "Faq",
    hasDropdown: true,
    dropdownItems: [
      { label: "Faq basic", href: "/faq/faq-basic" },
      { label: "Faq alt", href: "/faq/faq-alt" },
      { label: "Faq accordion", href: "/faq/faq-accordion" },
    ],
  },
  {
    id: "errors",
    icon: TriangleAlert,
    label: "Errors",
    hasDropdown: true,
    dropdownItems: [
      { label: "404", href: "/errors/404" },
      { label: "500", href: "/errors/500" },
    ],
  },
  {
    id: "miscellaneous",
    icon: Pin,
    label: "Miscellaneous",
    hasDropdown: true,
    dropdownItems: [
      { label: "Associations", href: "/miscellaneous/associations" },
      { label: "Invite people", href: "/miscellaneous/invite-people" },
      { label: "Privacy policy", href: "/miscellaneous/privacy-policy" },
    ],
  },
  {
    id: "layouts",
    icon: AppWindow,
    label: "Layouts",
    hasDropdown: true,
    dropdownItems: [
      { label: "Navbar vertical", href: "/layouts/navbar" },
      { label: "Top nav", href: "/layouts/top-nav" },
      { label: "Double top", href: "/layouts/double-top" },
      { label: "Combo nav", href: "/layouts/combo-nav" },
    ],
  },
];

// Modules dropdown items configuration
export const moduleItems = [
  {
    id: "forms",
    icon: FileText,
    label: "Forms",
    hasDropdown: true,
    dropdownItems: [
      { label: "Basic", href: "/module/forms/basic" },
      { label: "Advance", href: "/module/forms/advance" },
      { label: "Floating labels", href: "/module/forms/floating-labels" },
      { label: "Wizard", href: "/module/forms/wizard" },
      { label: "validation", href: "/module/forms/validation" },
    ],
  },
  {
    id: "tables",
    icon: Grid2x2,
    label: "Tables",
    hasDropdown: true,
    dropdownItems: [
      { label: "Basic tables", href: "/module/tables/basic-tables" },
      { label: "Advance tables", href: "/module/tables/advance-tables" },
      { label: "Bulk select", href: "/module/tables/bulk-select" },
    ],
  },
  {
    id: "charts",
    icon: ChartLine,
    label: "Charts",
    hasDropdown: true,
    dropdownItems: [
      { label: "Chartjs", href: "/module/charts/chartjs" },
      { label: "D3js", href: "/module/charts/d3js" },
      { label: "ECharts", href: "/module/charts/eCharts" },
    ],
  },
  {
    id: "icons",
    icon: Shapes,
    label: "Icons",
    hasDropdown: true,
    dropdownItems: [
      { label: "Font awesome", href: "/module/icons/font-awesome" },
      { label: "Bootstrap icons", href: "/module/icons/bootstarp-icons" },
      { label: "Feather", href: "/module/icons/feather" },
      { label: "Material icons", href: "/module/icons/material-icons" },
    ],
  },
  {
    id: "maps",
    icon: Map,
    label: "Maps",
    hasDropdown: true,
    dropdownItems: [
      { label: "Google map", href: "/module/maps/google-map" },
      { label: "Leaflet map", href: "/module/maps/leaflet-map" },
    ],
  },

  {
    id: "multi",
    icon: Layers,
    label: "Multi Level",
    hasDropdown: true,
    dropdownItems: [
      { label: "Level two", href: "/module/multi/level-two" },
      { label: "Level three", href: "/module/multi/level-three" },
      { label: "Level four", href: "/module/multi/level-four" },
    ],
  },
];

// Documentation dropdown items configuration
export const documentationItems = [
  {
    id: "getting-started",
    icon: Rocket,
    label: "Getting Started",
    hasDropdown: false,
    href: "/doc/getting-started",
  },
  {
    id: "customization",
    icon: Wrench,
    label: "Customization",
    hasDropdown: true,
    dropdownItems: [
      { label: "Configuration", href: "/doc/customization/configuration" },
      { label: "Styling", href: "/doc/customization/styling" },
      { label: "Dark mode", href: "/doc/customization/dark-mode" },
      { label: "Plugin", href: "/doc/customization/plugin" },
    ],
  },
  {
    id: "faq",
    icon: CircleQuestionMark,
    label: "Faq",
    hasDropdown: false,
    href: "/faq",
  },

  {
    id: "gulp",
    icon: CupSoda,
    label: "Gulp",
    hasDropdown: false,
    href: "/doc/gulp",
  },
  {
    id: "design-file",
    icon: Palette,
    label: "Design File",
    hasDropdown: false,
    href: "/doc/design-file",
  },
  {
    id: "changelog",
    icon: GitBranch,
    label: "Changelog",
    hasDropdown: false,
    href: "/doc/changelog",
  },
];
