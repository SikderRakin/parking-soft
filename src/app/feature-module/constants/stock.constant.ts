
export abstract class StockConstant {
    // Messages
    static readonly SAVE_MESSAGE = 'Stock save successfully!';
    static readonly UPDATE_MESSAGE = 'Stock updated successfully!';
    static readonly DELETE_MESSAGE = 'Stock deleted Successfully!';
    static readonly SORT_UPDATED_MESSAGE = 'Stock sort successfully!';
    static readonly STATUS_UPDATED_MESSAGE = 'Stock status updated successfully!';
    static readonly INVALID_FORM_MESSAGE = 'Invalid Form!';

    // Actions
    static readonly ADD_ACTION = 'warehouse-category';

    // Roles
    static readonly STOCK_CREATE_ROLE = 'warehouses-create';
    static readonly STOCK_READ_ROLE = 'warehouses-read';
    static readonly STOCK_UPDATE_ROLE = 'warehouses-update';
    static readonly STOCK_DELETE_ROLE = 'warehouses-delete';

    // Status
    static readonly STOCK_STATUS = [
        { id: 'active', title: 'Active' },
        { id: 'inactive', title: 'Inactive' }
    ];

    // Status
    static readonly PRODUCT_STATUS = [
        { id: 'active', title: 'Publish' },
        { id: 'inactive', title: 'Unpublished' }
    ];

}
