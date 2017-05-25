export const TO_PAGE = 'TO_PAGE';

export function toPage (page) {
  return {
    type: TO_PAGE,
    page: page
  }
};
