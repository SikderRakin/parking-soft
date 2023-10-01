
export class StockReportModel {
    id?: number;
    product_id: number;
    product_variant_id: number;
    lot_id: number;
    onhand_quantity: number;
    reserved_quantity: number;
    forecasted_quantity: number;
    available_quantity: number;
    warehouse_id: number;
    location_id: number;
    quantity: number;
    created_at: Date;

    warehouse: any;
    location: any;
    location_name: any;
    product_variant: any;

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
