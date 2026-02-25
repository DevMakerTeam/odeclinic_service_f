/* eslint-disable */
// @ts-nocheck

// ─── 공통 ────────────────────────────────────────────────────────────────────

export interface CommonResponseDto {
  statusCode: number;
  message: string;
  data: object;
}

export interface CommonErrorResponseDto {
  statusCode: number;
  timestamp: string;
  errorData: ErrorDataDto;
}

export interface ErrorDataDto {
  path: string;
  error: string;
  message: string[];
}

// ─── Auth ────────────────────────────────────────────────────────────────────

export interface SendSmsDto {
  /** 휴대폰 번호 (국가코드 포함, 예: +821012345678 또는 01012345678) */
  phone: string;
  /** 국가 코드 (phone에 +가 없을 경우 사용, 기본값: 82) */
  countryCode?: string;
}

export interface SendSmsResponseDto {
  message: string;
  expireMinutes: number;
}

export interface VerifySmsDto {
  phone: string;
  countryCode?: string;
  /** 6자리 인증번호 */
  code: string;
}

export interface AuthTokenResponseDto {
  userId: string;
  isNewUser: boolean;
  accessToken: string;
  refreshToken: string;
}

export interface RefreshTokenResponseDto {
  accessToken: string;
}

export interface LogoutResponseDto {
  success: boolean;
}

export interface AuthDevLoginDto {
  role: "MEMBER" | "ADMIN";
  phone?: string;
}

export interface DevLoginResponseDto {
  userId: string;
  isNewUser: boolean;
  accessToken: string;
  refreshToken: string;
  mockRole: string;
}

// ─── Event ───────────────────────────────────────────────────────────────────

export interface EventListItemResponseDto {
  id: number;
  title: string;
  description?: string;
  tag?: string;
  lang?: string;
  displayStartAt?: string;
  displayEndAt?: string;
  status: "ACTIVE" | "HIDDEN";
  sortOrder: number;
  minPrice?: number;
  createdAt: string;
  updatedAt: string;
  deletedAt?: null | string;
}

export interface EventDetailResponseDto {
  id: number;
  title: string;
  description?: string;
  tag?: string;
  lang?: string;
  displayStartAt?: string;
  displayEndAt?: string;
  status: "ACTIVE" | "HIDDEN";
  sortOrder: number;
  minPrice?: number | null;
  createdAt: string;
  updatedAt: string;
  deletedAt?: null | string;
  products: ProductResponseDto[];
}

export interface EventListResponseDto {
  items: EventListItemResponseDto[];
  total: number;
  page: number;
  size: number;
  lastPage: number;
  nextPage: number;
}

// ─── Product ─────────────────────────────────────────────────────────────────

export interface ProductResponseDto {
  id: number;
  eventId: number;
  title: string;
  description?: string;
  tag?: string;
  lang?: string;
  price: number;
  discountPrice?: number;
  discountRate?: number;
  status: "ACTIVE" | "HIDDEN";
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

// ─── Doctor ──────────────────────────────────────────────────────────────────

export interface DoctorScheduleDto {
  mon?: { am: boolean; pm: boolean };
  tue?: { am: boolean; pm: boolean };
  wed?: { am: boolean; pm: boolean };
  thu?: { am: boolean; pm: boolean };
  fri?: { am: boolean; pm: boolean };
  sat?: { am: boolean; pm: boolean };
  sun?: { am: boolean; pm: boolean };
}

export interface DoctorResponseDto {
  id: number;
  name: string;
  position?: string;
  jobTitle?: string;
  careers?: string[];
  schedules?: DoctorScheduleDto;
  lang?: string;
  status: "ACTIVE" | "HIDDEN";
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface DoctorListResponseDto {
  items: DoctorResponseDto[];
  total: number;
  page: number;
  size: number;
  lastPage: number;
  nextPage: number;
}

// ─── Unavailable Slot ────────────────────────────────────────────────────────

export interface UnavailableSlotResponseDto {
  id: number;
  title?: string;
  start: string;
  end: string;
  status: "ACTIVE" | "HIDDEN";
  createdAt: string;
  updatedAt: string;
}

export interface UnavailableSlotListResponseDto {
  unavailableSlots: UnavailableSlotResponseDto[];
}

// ─── Schedule ────────────────────────────────────────────────────────────────

export interface DoctorByDateResponseDto {
  id: number;
  name: string;
  position?: string;
  jobTitle?: string;
}

export interface DoctorByDateListResponseDto {
  items: DoctorByDateResponseDto[];
  total: number;
  page: number;
  size: number;
  lastPage: number;
  nextPage: number;
}

// ─── Reservation ─────────────────────────────────────────────────────────────

export interface CustomerInfoDto {
  name: string;
  birthDate: string;
  email: string;
  request?: string;
}

export interface ReservationProductDto {
  id: number;
  reservationId: number;
  productId: number;
  eventId: number;
  productTitle: string;
  productDescription?: string;
  productTag?: string;
  productLang?: string;
  productPrice: number;
  productDiscountPrice?: number;
  productDiscountRate?: number;
  createdAt: string;
}

export interface ReservationResponseDto {
  id: number;
  userId: string;
  userPhone?: string;
  doctorId?: number;
  doctorName: string;
  reservedAt: string;
  confirmedAt?: string;
  customerInfo: CustomerInfoDto;
  status: "PENDING" | "CONFIRMED" | "CANCELLED";
  createdAt: string;
  updatedAt: string;
  products: ReservationProductDto[];
}

export interface ReservationCreateDto {
  /** 예약 희망 시간 (ISO 형식) */
  reservedAt: string;
  /** 선택한 상품 ID 목록 */
  productIds: string[];
  customerInfo: CustomerInfoDto;
  /** 선택한 의료진 ID (null이면 "아무나 상관없음") */
  doctorId?: number;
  /** 의료진 이름 또는 "all" */
  doctorName: string;
}

export interface ReservationListResponseDto {
  items: ReservationResponseDto[];
  total: number;
  page: number;
  size: number;
  lastPage: number;
  nextPage: number;
}

// ─── Blog ─────────────────────────────────────────────────────────────────────

export interface BlogResponseDto {
  id: number;
  slug: string;
  lang?: string;
  title: string;
  content?: string;
  description?: string;
  metadata?: Record<string, unknown>;
  heroImage?: string;
  thumbnail?: string;
  isMainExposed: boolean;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface BlogListResponseDto {
  items: BlogResponseDto[];
  total: number;
  page: number;
  size: number;
  lastPage: number;
  nextPage: number;
}

// ─── Popup ────────────────────────────────────────────────────────────────────

export interface PopupResponseDto {
  id: number;
  title: string;
  imageUrl: string;
  link?: string;
  lang: string;
  startDate: string;
  endDate: string;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface PopupListResponseDto {
  items: PopupResponseDto[];
  total: number;
  page: number;
  size: number;
  lastPage: number;
  nextPage: number;
}
