# Shopify integration

## Confirmado con Shopify Dev MCP
- React Router apps usan `@shopify/shopify-app-react-router`, `authenticate.admin`, App Bridge y rutas `app.*`.
- App Home recomienda Polaris web components para UI dentro del iframe de Shopify Admin.
- Delivery Customization Function puede ocultar/renombrar/ordenar delivery options.
- Cart and Checkout Validation usa validations y `write_validations` cuando aplica.
- TranslatableResource requiere `read_translations`; `translationsRegister` requiere `write_translations`.
- `publishablePublish` requiere `write_publications` para publicaciones futuras.

## Integraciones de Merchandising QA Scanner
- Admin GraphQL product query for status, publication, collections, inventory and online store URL.
- currentAppInstallation accessScopes check for permission state.
- Future admin product block can deep link from a product to its scan result.

## Scopes
- Required: read_products, read_inventory, read_publications
- Explicitly not requested: write_products, read_orders, read_customers

## Webhooks
- app/uninstalled
- app/scopes_update

## Credenciales faltantes
- `SHOPIFY_API_KEY`
- `SHOPIFY_API_SECRET`
- `SHOPIFY_APP_URL`
- `DATABASE_URL`

## No validado todavia
- Config remota de Partner Dashboard.
- Instalacion real en dev store.
- API calls reales contra Admin GraphQL.
