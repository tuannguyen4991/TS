export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
      const { length } = this;

      for (let idx = 0; idx < length; idx += 1) {
          for (let jdx = 0; jdx < length - idx - 1; jdx += 1) {
              this.compare(jdx, jdx +1) ? this.swap(jdx, jdx + 1) : '';
          }
      }
  }
}