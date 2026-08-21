import { leapwork } from "./leapwork";

leapwork.variables.set("recipientName", "hey yest", leapwork.storage.LOCAL);
const lw__recipientName = leapwork.variables.get("recipientName", leapwork.storage.LOCAL) as string;

leapwork.variables.set("emailAddress", "hadfhdas@leapwork.test", leapwork.storage.LOCAL);
const lw__emailAddress = leapwork.variables.get("emailAddress", leapwork.storage.LOCAL) as string;

leapwork.variables.set("streetAddress", "test adderss1 ", leapwork.storage.LOCAL);
const lw__streetAddress = leapwork.variables.get("streetAddress", leapwork.storage.LOCAL) as string;

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 200000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

// ai-studio-step-id: pw1ysve7y0
await leapwork.step("Click the Leap & Leash Chicken Kibble product card priced at $28.00", async () => {
    // Click button "View details for Leap & Leash Chicken Kibble, $28.00"
    await page.getByRole('button', { name: 'View details for Leap & Leash' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1n0aibr0
await leapwork.step("Click Add to cart for Leap & Leash Chicken Kibble ($28.00)", async () => {
    // Click button "Add to cart"
   await page.waitForTimeout(60000);
    await page.getByRole('button', { name: 'Add to cart' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1msyj9u0
await leapwork.step("Click the Window Perch Cat Tree product card to view its details", async () => {
    // Click heading "Window Perch Cat Tree"
    await page.getByRole('button', { name: 'View details for Window Perch' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1515k1l0
await leapwork.step("Click Add to cart for the $64.00 Window Perch Cat Tree", async () => {
    // Click button "Add to cart"
    await page.getByRole('button', { name: 'Add to cart' }).click();
}, { action: "click"});

// ai-studio-step-id: pw12xgnm40
await leapwork.step("Click View details for Oat & Aloe Wash, priced at $16.00", async () => {
    // Click button "View details for Oat & Aloe Wash, $16.00"
    await page.getByRole('button', { name: 'View details for Oat & Aloe' }).click();
}, { action: "click" });

// ai-studio-step-id: pwm3me8t00
await leapwork.step("Click Add to cart for the Oat & Aloe Wash ($16.00) dialog", async () => {
    // Click button "Add to cart"
    await page.getByRole('button', { name: 'Add to cart' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1j2jnf60
await leapwork.step("Click the Checkout button in the cart footer", async () => {
    // Click button "Checkout"
    await page.getByRole('button', { name: 'Checkout' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1fwh1jf0
await leapwork.step(`Fill the Recipient name field with "${lw__recipientName}" on the checkout page`, async () => {
    // Fill textbox "Recipient name"
    await page.getByRole('textbox', { name: 'Recipient name' }).fill(String(lw__recipientName));
}, { action: "input" });

// ai-studio-step-id: pw1q5qn0a0
await leapwork.step("Press Tab to move focus to the next element on the page", async () => {
    // Press Tab on element
    await page.keyboard.press("Tab");
}, { action: "keydown" });

// ai-studio-step-id: pw1203qw10
await leapwork.step(`Fill the Email address field with "${lw__emailAddress}"`, async () => {
    // Fill textbox "Email address"
    await page.getByRole('textbox', { name: 'Email address' }).fill(String(lw__emailAddress));
}, { action: "input" });

// ai-studio-step-id: pw1yn398x0
await leapwork.step("Click the Street address field in the Checkout form", async () => {
    // Click textbox "Street address"
    await page.getByRole('textbox', { name: 'Street address' }).click();
}, { action: "click" });

// ai-studio-step-id: pwu9tqmw00
await leapwork.step(`Fill the Street address field with "${lw__streetAddress}"`, async () => {
    // Fill textbox "Street address"
    await page.getByRole('textbox', { name: 'Street address' }).fill(String(lw__streetAddress));
}, { action: "input" });

// ai-studio-step-id: pw1n3u4vf0
await leapwork.step("Click the 1187 Willow Bark Avenue address suggestion in the Street address field", async () => {
    // Click span
    await page.getByRole('option', { name: '1187 Willow Bark Avenue 98103' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"addressSuggestions\"]/button[1]/span" });

// ai-studio-step-id: pwo6vmk400
await leapwork.step("Click the “Continue to payment” button in checkout", async () => {
    // Click button "Continue to payment"
    await page.getByRole('button', { name: 'Continue to payment' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"continueToPayment\"]" });

// ai-studio-step-id: pwzqqmfn00
await leapwork.step("Click Review order in the Checkout section", async () => {
    // Click button "Review order"
    await page.getByRole('button', { name: 'Review order' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"continueToReview\"]" });

// ai-studio-step-id: pw13rrfu40
await leapwork.step("Click the Place order button.checkout-actions", async () => {
    // Click button "Place order"
    await page.getByRole('button', { name: 'Place order' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"reviewStep\"]/div[2]/button[2]" });