import { StreetStatus, StreetInfo, BanSchedule, RouteGuide } from './types';

export const BANNED_STREETS: StreetInfo[] = [
  { name: "Phạm Hùng", type: StreetStatus.BANNED, description: "Đoạn từ Mễ Trì đến Trần Duy Hưng" },
  { name: "Đại lộ Thăng Long", type: StreetStatus.BANNED, description: "Làn tiếp giáp Trung tâm Hội nghị Quốc gia (Phạm Hùng đến đường gom phải Lê Quang Đạo)" },
  { name: "Trần Hữu Dực", type: StreetStatus.BANNED },
  { name: "Lê Đức Thọ", type: StreetStatus.BANNED },
  { name: "Lê Quang Đạo", type: StreetStatus.BANNED },
  { name: "Đỗ Đức Dục", type: StreetStatus.BANNED },
  { name: "Miếu Đầm", type: StreetStatus.BANNED },
  { name: "Trần Duy Hưng", type: StreetStatus.BANNED },
  { name: "Khuất Duy Tiến", type: StreetStatus.BANNED, description: "Đoạn từ Lê Văn Lương đến Phạm Hùng" },
  { name: "Nguyễn Chí Thanh", type: StreetStatus.BANNED },
  { name: "Liễu Giai", type: StreetStatus.BANNED, description: "Đoạn từ Nguyễn Chí Thanh đến Phan Kế Bính" },
  { name: "Đào Tấn", type: StreetStatus.BANNED },
  { name: "Kim Mã", type: StreetStatus.BANNED },
  { name: "Vạn Phúc", type: StreetStatus.BANNED },
  { name: "Nguyễn Thái Học", type: StreetStatus.BANNED },
  { name: "Trần Phú", type: StreetStatus.BANNED },
  { name: "Hùng Vương", type: StreetStatus.BANNED },
  { name: "Chu Văn An", type: StreetStatus.BANNED },
  { name: "Hoàng Diệu", type: StreetStatus.BANNED },
  { name: "Độc Lập", type: StreetStatus.BANNED },
  { name: "Lê Hồng Phong", type: StreetStatus.BANNED },
  { name: "Hoàng Văn Thụ", type: StreetStatus.BANNED },
  { name: "Nguyễn Tri Phương", type: StreetStatus.BANNED },
  { name: "Điện Biên Phủ", type: StreetStatus.BANNED },
  { name: "Lê Duẩn", type: StreetStatus.BANNED, description: "Đoạn từ Điện Biên Phủ đến Nguyễn Du" },
  { name: "Hàng Lọng", type: StreetStatus.BANNED },
  { name: "Trần Bình Trọng", type: StreetStatus.BANNED },
  { name: "Trần Hưng Đạo", type: StreetStatus.BANNED, description: "Đoạn từ Quang Trung đến Quán Sứ" },
  { name: "Quán Sứ", type: StreetStatus.BANNED },
  { name: "Tràng Thi", type: StreetStatus.BANNED },
];

export const RESTRICTED_STREETS: StreetInfo[] = [
  { name: "Hoàng Hoa Thám", type: StreetStatus.RESTRICTED },
  { name: "Thanh Niên", type: StreetStatus.RESTRICTED },
  { name: "Thụy Khuê", type: StreetStatus.RESTRICTED },
  { name: "Nghi Tàm", type: StreetStatus.RESTRICTED },
  { name: "Âu Cơ", type: StreetStatus.RESTRICTED },
  { name: "An Dương Vương", type: StreetStatus.RESTRICTED },
  { name: "Yên Phụ", type: StreetStatus.RESTRICTED },
  { name: "Trần Nhật Duật", type: StreetStatus.RESTRICTED },
  { name: "Hai Bà Trưng", type: StreetStatus.RESTRICTED },
  { name: "Láng", type: StreetStatus.RESTRICTED },
  { name: "Láng Hạ", type: StreetStatus.RESTRICTED },
  { name: "Lê Văn Lương", type: StreetStatus.RESTRICTED },
  { name: "Khuất Duy Tiến", type: StreetStatus.RESTRICTED },
  { name: "Mễ Trì", type: StreetStatus.RESTRICTED },
  { name: "Đại lộ Thăng Long", type: StreetStatus.RESTRICTED },
];

export const SCHEDULES: BanSchedule[] = [
  {
    date: "14/01",
    slots: [{ start: "05:30", end: "11:30" }]
  },
  {
    date: "19/01",
    slots: [
      { start: "06:00", end: "08:30" },
      { start: "10:30", end: "12:00" },
      { start: "13:00", end: "14:00" },
      { start: "16:00", end: "19:00" }
    ]
  },
  {
    date: "20/01",
    slots: [
      { start: "06:00", end: "08:30" },
      { start: "10:30", end: "12:00" },
      { start: "13:00", end: "14:00" },
      { start: "16:00", end: "19:00" }
    ]
  },
  {
    date: "21/01",
    slots: [
      { start: "06:00", end: "08:30" },
      { start: "10:30", end: "12:00" },
      { start: "13:00", end: "14:00" },
      { start: "16:00", end: "19:00" }
    ]
  },
  {
    date: "22/01",
    slots: [
      { start: "06:00", end: "08:30" },
      { start: "10:30", end: "12:00" },
      { start: "13:00", end: "14:00" },
      { start: "16:00", end: "19:00" }
    ]
  },
  {
    date: "23/01",
    slots: [
      { start: "06:00", end: "08:30" },
      { start: "10:30", end: "12:00" },
      { start: "13:00", end: "14:00" },
      { start: "16:00", end: "19:00" }
    ]
  },
  {
    date: "24/01",
    slots: [
      { start: "06:00", end: "08:30" },
      { start: "10:30", end: "12:00" },
      { start: "13:00", end: "14:00" },
      { start: "16:00", end: "19:00" }
    ]
  },
  {
    date: "25/01",
    slots: [
      { start: "06:00", end: "08:30" },
      { start: "10:30", end: "12:00" },
      { start: "13:00", end: "14:00" },
      { start: "16:00", end: "19:00" }
    ]
  },
];

export const DETOURS: RouteGuide[] = [
  {
    from: "Phía Đông",
    to: "Phía Tây",
    path: "Cao tốc Hà Nội - Hải Phòng -> QL5 -> Cầu Thanh Trì/Phù Đổng -> Nút giao Ninh Hiệp -> QL3 mới."
  },
  {
    from: "Phía Nam",
    to: "Đông/Tây/Bắc",
    path: "Pháp Vân - Cầu Giẽ -> Nút giao Đỗ Mười -> Vành đai 3 trên cao -> Cầu Thanh Trì -> Cao tốc Hà Nội - Hải Phòng (đi Đông) HOẶC Cầu Phù Đổng -> Ninh Hiệp -> QL3 mới (đi Tây)."
  },
  {
    from: "Phía Nam",
    to: "Tây Bắc",
    path: "Đường Hồ Chí Minh -> QL21A."
  },
  {
    from: "Phú Thọ",
    to: "Trung tâm Hà Nội",
    path: "Cầu Diễn -> Hồ Tùng Mậu HOẶC QL21 -> QL6 -> Quang Trung -> Trần Phú -> Nguyễn Trãi. (Hạn chế vào Đại lộ Thăng Long)."
  }
];
