import {AppProvider} from '@shopify/discount-app-components'
import "@shopify/discount-app-components/build/esm/styles.css"

export function DiscountProvider() {
  return (
    <AppProvider locale='en-US' ianaTimezone='America/Toronto'>
      {children}
    </AppProvider>
  )
}