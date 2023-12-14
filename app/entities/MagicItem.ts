import { Item } from "./item";

export class MagicItem extends Item {
  updateQuality() {
    this.sellIn = this.sellIn - 1;

    if (this.quality > 0) {
      this.quality = this.quality - 1;
    }

    if (this.sellIn < 0 && this.quality > 0) {
      this.quality = this.quality - 1;
    }
  }
}
