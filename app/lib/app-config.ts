export const APP_CONFIG = {
  name: "Merchandising QA Scanner",
  shortName: "Merch QA",
  slug: "merchandising-qa-scanner",
  tagline: "Findability checks for products that should be visible but are not selling.",
  problem: "Merchants cannot quickly explain why active products are missing from the storefront, search, collections, or markets.",
  persona: "Catalog manager or owner-operator with recurring product launch and merchandising QA work.",
  value: "A single embedded checklist that converts scattered Shopify visibility causes into a prioritized QA workflow.",
  primaryFlow: "Open dashboard, review failing products, inspect a product checklist, fix the source issue in Shopify Admin, then rerun the scan.",
  color: "#2563eb",
  mainObject: "Product visibility scan",
  workspaceLabel: "Scan workspace",
  settingsLabel: "Rules",
  requiredScopes: ["read_products","read_inventory","read_publications"],
  doNotRequestScopes: ["write_products","read_orders","read_customers"],
  integrations: [
  "Admin GraphQL product query for status, publication, collections, inventory and online store URL.",
  "currentAppInstallation accessScopes check for permission state.",
  "Future admin product block can deep link from a product to its scan result."
],
  mvpFeatures: [
  "Dashboard with visible/hidden counts and failing checks.",
  "Product-level checklist for status, publication, collections, inventory and storefront URL.",
  "Storewide report with filters by severity and cause.",
  "Manual rerun action with validation and empty/error/loading states."
],
  outOfScope: [
  "Automatic product fixes in v1.",
  "Theme crawler that verifies final rendered storefront pages.",
  "Market-specific pricing diagnosis beyond visibility signals."
],
  futureFeatures: [
  "Scheduled scans and email alerts.",
  "Admin product page extension.",
  "Market/catalog coverage analysis.",
  "Launch QA checklist for scheduled releases."
],
  screens: [
  "Dashboard: scan health, top causes, next action.",
  "Scan workspace: failing products table and state previews.",
  "Rules: threshold and ignored-cause form.",
  "Help/QA: fixtures, limitations and test links."
],
  sampleRows: [
  [
    "ACTIVE T-shirt",
    "Missing Online Store publication",
    "High",
    "Fix publication"
  ],
  [
    "Archived jacket",
    "Archived product still in collection",
    "Medium",
    "Review status"
  ],
  [
    "Gift card",
    "No visible collection path",
    "Low",
    "Add collection"
  ]
],
  metrics: [
  [
    "Products checked",
    "248"
  ],
  [
    "Blocked from storefront",
    "17"
  ],
  [
    "High priority",
    "6"
  ]
],
  settingsFields: {
  "workflowName": "Weekly visibility scan",
  "thresholdLabel": "High priority threshold",
  "thresholdDefault": "80",
  "ownerEmail": "catalog-ops@example.com"
},
  risks: [
  "Some storefront visibility depends on theme logic not visible to Admin API.",
  "Market/catalog exclusions require extra validation on real stores."
],
} as const;

export type AppConfig = typeof APP_CONFIG;

export function requiredScopesText() {
  return APP_CONFIG.requiredScopes.join(",");
}
