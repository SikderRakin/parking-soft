export class VehicleModel {
  id?: number;
  ownerName: string;
  ownerPhone: string;
  ownerAddress: string;
  vehicleType: string;
  licenseNo: string;
  entryTime: any;
  exitTime: any;
  status: string;
  charge: number;

  // public get variantTitle() {
  //     if (this.product_variant != undefined && this.product_variant?.pva?.attribute_values?.value != undefined) {
  //         return `${this.product_variant?.title} ${this.product_variant?.pva ? this.product_variant?.pva?.attributes?.title + '-' : ""} ${this.product_variant?.pva ? this.product_variant?.pva?.attribute_values?.value : ''} `;
  //     } else if (this.product_variant != undefined) {
  //         return `${this.product_variant?.title} `;
  //     }
  //     return '';
  // }

  // public get warehouses() {
  //     if (this.warehouse != undefined) {
  //         return `${this.warehouse?.title} `;
  //     }
  //     return '';
  // }

  // public get sourceLocation() {
  //     if (this.location_name != undefined) {
  //         return `${this?.location_name} `;
  //     }
  //     return '';
  // }
}
