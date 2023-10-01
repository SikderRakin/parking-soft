export abstract class VehicleConstant {
  // Messages
  static readonly SAVE_MESSAGE = 'Vehicle Info save successfully!';
  static readonly UPDATE_MESSAGE = 'Vehicle Info successfully!';
  static readonly DELETE_MESSAGE = 'Vehicle Info deleted Successfully!';
  static readonly NO_ITEM_FOUND = 'No Vehicle found !';
  static readonly STATUS_UPDATED_MESSAGE = 'Vehicle Info updated successfully!';
  static readonly INVALID_FORM_MESSAGE = 'Invalid Form!';

  // Status
  static readonly STATUS = [
    { id: 'in', title: 'IN' },
    { id: 'out', title: 'OUT' },
  ];
  static readonly VEHICLE_TYPE = [
    { id: 'microbus', title: 'Microbus' },
    { id: 'car', title: 'Car' },
    { id: 'truck', title: 'Truck' },
  ];
}
