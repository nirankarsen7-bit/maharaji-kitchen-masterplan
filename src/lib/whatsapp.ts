export const WHATSAPP_NUMBER = "918538835512";

export function wa(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const MESSAGES = {
  reservePackage: (name: string) =>
    `Hello Maharaji Kitchen,\n\nI would like to reserve the ${name} package.\n\nPlease share availability, pricing, and booking details.`,
  reserveTable: () =>
    `Hello Maharaji Kitchen,\n\nI would like to reserve a table.\n\nPlease share booking details and availability.`,
  todayOffer: () =>
    `Hello Maharaji Kitchen,\n\nI would like to know today's available offers, discounts, and event package deals.`,
  eventDiscount: () =>
    `Hello Maharaji Kitchen,\n\nPlease share any available offers or discounts for my event booking.`,
  customPackage: () =>
    `Hello Maharaji Kitchen,\n\nI would like to build a custom event package. Please share availability and assist me with planning.`,
  generalInquiry: () =>
    `Hello Maharaji Kitchen,\n\nI would like to know more about your services.`,
};
