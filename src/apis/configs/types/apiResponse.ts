export interface GearSellerApiResponse<T> {
  success: boolean;
  payload: T;
}
export interface ApiResponse<T> {
  success: boolean;
  payload: T;
}
export interface MetadataResponse {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface ListDataResponse<T> {
  data: T[];
  metadata?: MetadataResponse;
}

export interface GearDealerApiErrorResponse {
  success: boolean;
  error: GearDealerApiError;
}

interface GearDealerApiError {
  statusCode: number;
  message: string;
}

export function instanceOfGearDealerApiError(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  object: any,
): object is GearDealerApiErrorResponse {
  return (
    (object as GearDealerApiErrorResponse).error !== undefined &&
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    object.success === false
  );
}
