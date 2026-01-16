import { StreetStatus, StreetInfo, BanSchedule, RouteGuide } from './types';

// Approximate coordinates added for map visualization
export const BANNED_STREETS: StreetInfo[] = [
  { name: "Phạm Hùng", type: StreetStatus.BANNED, description: "Đoạn từ Mễ Trì đến Trần Duy Hưng", lat: 21.0185, lng: 105.7841 },
  { name: "Đại lộ Thăng Long", type: StreetStatus.BANNED, description: "Làn tiếp giáp TT Hội nghị Quốc gia", lat: 21.0092, lng: 105.7865 },
  { name: "Trần Hữu Dực", type: StreetStatus.BANNED, lat: 21.0315, lng: 105.7598 },
  { name: "Lê Đức Thọ", type: StreetStatus.BANNED, lat: 21.0336, lng: 105.7692 },
  { name: "Lê Quang Đạo", type: StreetStatus.BANNED, lat: 21.0150, lng: 105.7720 },
  { name: "Đỗ Đức Dục", type: StreetStatus.BANNED, lat: 21.0065, lng: 105.7870 },
  { name: "Miếu Đầm", type: StreetStatus.BANNED, lat: 21.0080, lng: 105.7885 },
  { name: "Trần Duy Hưng", type: StreetStatus.BANNED, lat: 21.0105, lng: 105.7980 },
  { name: "Khuất Duy Tiến", type: StreetStatus.BANNED, description: "Đoạn từ Lê Văn Lương đến Phạm Hùng", lat: 20.9995, lng: 105.7955 },
  { name: "Nguyễn Chí Thanh", type: StreetStatus.BANNED, lat: 21.0230, lng: 105.8100 },
  { name: "Liễu Giai", type: StreetStatus.BANNED, description: "Đoạn từ Nguyễn Chí Thanh đến Phan Kế Bính", lat: 21.0345, lng: 105.8155 },
  { name: "Đào Tấn", type: StreetStatus.BANNED, lat: 21.0330, lng: 105.8120 },
  { name: "Kim Mã", type: StreetStatus.BANNED, lat: 21.0310, lng: 105.8230 },
  { name: "Nguyễn Thái Học", type: StreetStatus.BANNED, lat: 21.0295, lng: 105.8350 },
  { name: "Trần Phú", type: StreetStatus.BANNED, lat: 21.0315, lng: 105.8385 },
  { name: "Hùng Vương", type: StreetStatus.BANNED, lat: 21.0360, lng: 105.8365 },
  { name: "Hoàng Diệu", type: StreetStatus.BANNED, lat: 21.0350, lng: 105.8400 },
  { name: "Độc Lập", type: StreetStatus.BANNED, lat: 21.0365, lng: 105.8350 },
  { name: "Lê Hồng Phong", type: StreetStatus.BANNED, lat: 21.0335, lng: 105.8355 },
  { name: "Hoàng Văn Thụ", type: StreetStatus.BANNED, lat: 21.0375, lng: 105.8350 },
  { name: "Nguyễn Tri Phương", type: StreetStatus.BANNED, lat: 21.0340, lng: 105.8410 },
  { name: "Điện Biên Phủ", type: StreetStatus.BANNED, lat: 21.0320, lng: 105.8405 },
  { name: "Lê Duẩn", type: StreetStatus.BANNED, description: "Đoạn từ Điện Biên Phủ đến Nguyễn Du", lat: 21.0250, lng: 105.8415 },
  { name: "Trần Bình Trọng", type: StreetStatus.BANNED, lat: 21.0225, lng: 105.8430 },
  { name: "Trần Hưng Đạo", type: StreetStatus.BANNED, description: "Đoạn từ Quang Trung đến Quán Sứ", lat: 21.0235, lng: 105.8460 },
  { name: "Quán Sứ", type: StreetStatus.BANNED, lat: 21.0245, lng: 105.8455 },
  { name: "Tràng Thi", type: StreetStatus.BANNED, lat: 21.0265, lng: 105.8480 },
];

export const RESTRICTED_STREETS: StreetInfo[] = [
  { name: "Hoàng Hoa Thám", type: StreetStatus.RESTRICTED, lat: 21.0410, lng: 105.8250 },
  { name: "Thanh Niên", type: StreetStatus.RESTRICTED, lat: 21.0450, lng: 105.8380 },
  { name: "Thụy Khuê", type: StreetStatus.RESTRICTED, lat: 21.0420, lng: 105.8280 },
  { name: "Nghi Tàm", type: StreetStatus.RESTRICTED, lat: 21.0550, lng: 105.8350 },
  { name: "Âu Cơ", type: StreetStatus.RESTRICTED, lat: 21.0650, lng: 105.8300 },
  { name: "An Dương Vương", type: StreetStatus.RESTRICTED, lat: 21.0750, lng: 105.8250 },
  { name: "Yên Phụ", type: StreetStatus.RESTRICTED, lat: 21.0450, lng: 105.8450 },
  { name: "Trần Nhật Duật", type: StreetStatus.RESTRICTED, lat: 21.0360, lng: 105.8550 },
  { name: "Hai Bà Trưng", type: StreetStatus.RESTRICTED, lat: 21.0250, lng: 105.8500 },
  { name: "Láng", type: StreetStatus.RESTRICTED, lat: 21.0150, lng: 105.8050 },
  { name: "Láng Hạ", type: StreetStatus.RESTRICTED, lat: 21.0180, lng: 105.8150 },
  { name: "Lê Văn Lương", type: StreetStatus.RESTRICTED, lat: 21.0050, lng: 105.8050 },
  { name: "Khuất Duy Tiến", type: StreetStatus.RESTRICTED, lat: 20.9950, lng: 105.7950 },
  { name: "Mễ Trì", type: StreetStatus.RESTRICTED, lat: 21.0150, lng: 105.7780 },
  { name: "Đại lộ Thăng Long", type: StreetStatus.RESTRICTED, lat: 21.0050, lng: 105.7700 },
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