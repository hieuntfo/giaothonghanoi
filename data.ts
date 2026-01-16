import { BanSchedule, RouteGuide, RoadGroup } from './types';

export const ROAD_DATA: RoadGroup[] = [
  {
    "group": "Cấm triệt để (Màu Đỏ)",
    "roads": [
      {
        "name": "Trần Hữu Dực",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Giao Lê Đức Thọ",
        "destination": "Giao Trịnh Văn Bô (Đường 70)",
        "note": "Toàn tuyến",
        "cachedPath": [[21.02951, 105.75883]] // Trung tâm đường
      },
      {
        "name": "Lê Đức Thọ",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Hồ Tùng Mậu",
        "destination": "Sân vận động Mỹ Đình",
        "note": "Toàn tuyến",
        "cachedPath": [[21.02796, 105.76657]] // Đoạn giữa
      },
      {
        "name": "Lê Quang Đạo",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Sân vận động Mỹ Đình",
        "destination": "Đại lộ Thăng Long",
        "note": "Toàn tuyến",
        "cachedPath": [[21.01250, 105.77100]] // Đoạn Phú Đô
      },
      {
        "name": "Phạm Hùng",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Ngã tư Mai Dịch",
        "destination": "Trần Duy Hưng (Big C)",
        "note": "Xe tải, khách >16 chỗ",
        "cachedPath": [[21.01850, 105.78410]] // Khu vực Keangnam
      },
      {
        "name": "Đỗ Đức Dục",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Phạm Hùng (Bảo tàng HN)",
        "destination": "Miếu Đầm",
        "note": "Toàn tuyến",
        "cachedPath": [[21.00700, 105.78500]] // Cổng khách sạn Marriott
      },
      {
        "name": "Miếu Đầm",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Đỗ Đức Dục",
        "destination": "Đại lộ Thăng Long",
        "note": "Toàn tuyến",
        "cachedPath": [[21.00750, 105.78720]] // Cầu vượt Mễ Trì
      },
      {
        "name": "Mễ Trì",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Phạm Hùng",
        "destination": "Lê Quang Đạo",
        "note": "Toàn tuyến",
        "cachedPath": [[21.01300, 105.77800]] // Khu vực The Manor
      },
      {
        "name": "Đại lộ Thăng Long",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Phạm Hùng",
        "destination": "Lê Quang Đạo",
        "note": "Làn tiếp giáp Trung tâm Hội nghị Quốc gia",
        "cachedPath": [[21.00750, 105.78000]] // Cổng NCC
      },
      {
        "name": "Trần Duy Hưng",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Hầm chui Trung Hòa",
        "destination": "Cầu vượt Nguyễn Chí Thanh",
        "note": "Toàn tuyến",
        "cachedPath": [[21.01100, 105.80000]] // Gần Grand Plaza
      },
      {
        "name": "Nguyễn Chí Thanh",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Trần Duy Hưng",
        "destination": "Kim Mã / Liễu Giai",
        "note": "Toàn tuyến",
        "cachedPath": [[21.02300, 105.81000]] // Hồ Ngọc Khánh
      },
      {
        "name": "Liễu Giai",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Nguyễn Chí Thanh",
        "destination": "Phan Kế Bính",
        "note": "Đoạn Nguyễn Chí Thanh - Phan Kế Bính",
        "cachedPath": [[21.03200, 105.81600]] // Metropolis
      },
      {
        "name": "Đào Tấn",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Liễu Giai",
        "destination": "Bưởi",
        "note": "Toàn tuyến",
        "cachedPath": [[21.03350, 105.81000]] // Công viên Thủ Lệ
      },
      {
        "name": "Kim Mã",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Liễu Giai (Daewoo)",
        "destination": "Sơn Tây / Nguyễn Thái Học",
        "note": "Toàn tuyến",
        "cachedPath": [[21.03150, 105.82500]] // Nhà hát chèo
      },
      {
        "name": "Khuất Duy Tiến",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Lê Văn Lương",
        "destination": "Phạm Hùng",
        "note": "Đoạn từ Lê Văn Lương đến Phạm Hùng",
        "cachedPath": [[21.00300, 105.79600]] // Nút giao Nguyễn Trãi/BigC
      },
      {
        "name": "Vạn Phúc",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Liễu Giai",
        "destination": "Hoàng Hoa Thám",
        "note": "Toàn tuyến",
        "cachedPath": [[21.03700, 105.81750]]
      },
      {
        "name": "Nguyễn Thái Học",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Kim Mã",
        "destination": "Cửa Nam",
        "note": "Toàn tuyến",
        "cachedPath": [[21.02980, 105.83500]] // Văn Miếu
      },
      {
        "name": "Trần Phú",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Kim Mã",
        "destination": "Điện Biên Phủ",
        "note": "Toàn tuyến",
        "cachedPath": [[21.03150, 105.83600]]
      },
      {
        "name": "Hùng Vương",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Hoàng Hoa Thám",
        "destination": "Nguyễn Thái Học",
        "note": "Toàn tuyến",
        "cachedPath": [[21.03750, 105.83700]] // Quảng trường
      },
      {
        "name": "Chu Văn An",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Điện Biên Phủ",
        "destination": "Nguyễn Thái Học",
        "note": "Toàn tuyến",
        "cachedPath": [[21.03250, 105.83750]]
      },
      {
        "name": "Hoàng Diệu",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Phan Đình Phùng",
        "destination": "Nguyễn Thái Học",
        "note": "Toàn tuyến",
        "cachedPath": [[21.03400, 105.84050]] // Hoàng Thành
      },
      {
        "name": "Độc Lập",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Điện Biên Phủ",
        "destination": "Hoàng Văn Thụ",
        "note": "Toàn tuyến",
        "cachedPath": [[21.03600, 105.83520]] // Lăng Bác
      },
      {
        "name": "Lê Hồng Phong",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Đội Cấn",
        "destination": "Điện Biên Phủ",
        "note": "Toàn tuyến",
        "cachedPath": [[21.03380, 105.83650]]
      },
      {
        "name": "Hoàng Văn Thụ",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Hoàng Diệu",
        "destination": "Độc Lập",
        "note": "Toàn tuyến",
        "cachedPath": [[21.03780, 105.83800]]
      },
      {
        "name": "Nguyễn Tri Phương",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Phan Đình Phùng",
        "destination": "Điện Biên Phủ",
        "note": "Toàn tuyến",
        "cachedPath": [[21.03100, 105.84120]]
      },
      {
        "name": "Điện Biên Phủ",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Cửa Nam",
        "destination": "Lăng Bác",
        "note": "Toàn tuyến",
        "cachedPath": [[21.03100, 105.83950]] // Cột cờ
      },
      {
        "name": "Lê Duẩn",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Điện Biên Phủ",
        "destination": "Nguyễn Du",
        "note": "Đoạn Điện Biên Phủ - Nguyễn Du",
        "cachedPath": [[21.02600, 105.84150]] // Ga HN
      },
      {
        "name": "Hàng Lọng",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Khu vực Ga Hà Nội",
        "destination": "Khu vực Ga Hà Nội",
        "note": "Đoạn qua Ga Hà Nội",
        "cachedPath": [[21.02400, 105.84160]]
      },
      {
        "name": "Trần Bình Trọng",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Trần Hưng Đạo",
        "destination": "Trần Nhân Tông",
        "note": "Toàn tuyến",
        "cachedPath": [[21.02150, 105.84320]]
      },
      {
        "name": "Trần Hưng Đạo",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Quang Trung",
        "destination": "Quán Sứ",
        "note": "Đoạn Quang Trung - Quán Sứ",
        "cachedPath": [[21.02350, 105.84400]]
      },
      {
        "name": "Quán Sứ",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Hai Bà Trưng",
        "destination": "Trần Hưng Đạo",
        "note": "Toàn tuyến",
        "cachedPath": [[21.02300, 105.84550]]
      },
      {
        "name": "Tràng Thi",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Cửa Nam",
        "destination": "Quang Trung",
        "note": "Toàn tuyến",
        "cachedPath": [[21.02630, 105.84500]] // Bệnh viện Việt Đức
      },
      {
        "name": "Vành đai 3 trên cao",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Cầu Thăng Long",
        "destination": "Nút giao Quốc lộ 5",
        "note": "Cấm ô tô >10 tấn, 6h-21h",
        "cachedPath": [[20.98000, 105.81000]] // Khu vực Linh Đàm (Đại diện)
      }
    ]
  },
  {
    "group": "Hạn chế (Màu Cam)",
    "roads": [
      { 
        "name": "Hoàng Hoa Thám",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Bưởi",
        "destination": "Phan Đình Phùng",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.04100, 105.82500]] // Công viên Bách Thảo
      },
      {
        "name": "Thanh Niên",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Yên Phụ",
        "destination": "Hùng Vương",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.04500, 105.83800]] // Chùa Trấn Quốc
      },
      {
        "name": "Thụy Khuê",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Bưởi",
        "destination": "Mai Xuân Thưởng",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.04000, 105.82000]]
      },
      {
        "name": "Nghi Tàm",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Âu Cơ",
        "destination": "Yên Phụ",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.05800, 105.83200]]
      },
      {
        "name": "Âu Cơ",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Cầu Nhật Tân",
        "destination": "Nghi Tàm",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.07200, 105.82200]] // Gần Ciputra
      },
      {
        "name": "An Dương Vương",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Cầu Nhật Tân",
        "destination": "Cầu Thăng Long",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.08500, 105.81000]]
      },
      {
        "name": "Yên Phụ",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Nghi Tàm",
        "destination": "Trần Nhật Duật",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.04300, 105.84800]] // Điểm trung chuyển Long Biên
      },
      {
        "name": "Trần Nhật Duật",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Yên Phụ",
        "destination": "Trần Quang Khải",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.03400, 105.85700]] // Chân cầu Chương Dương
      },
      {
        "name": "Hai Bà Trưng",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Lê Thánh Tông",
        "destination": "Lê Duẩn",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.02450, 105.84800]] // Tràng Tiền Plaza
      },
      {
        "name": "Láng",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Cầu Giấy",
        "destination": "Ngã Tư Sở",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.01000, 105.81000]] // Cầu Yên Hòa
      },
      {
        "name": "Láng Hạ",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Láng",
        "destination": "Giảng Võ",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.01700, 105.81500]] // Rạp chiếu phim QG
      },
      {
        "name": "Le Van Luong",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Khuất Duy Tiến",
        "destination": "Láng",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.00500, 105.81000]] // Cầu vượt Hoàng Đạo Thúy
      },
      {
        "name": "Mễ Trì",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Lê Quang Đạo",
        "destination": "Phạm Hùng",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.01423, 105.78469]] // Đoạn Mễ Trì Hạ
      }
    ]
  }
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
    path: "Pháp Vân - Cầu Giẽ -> Nút giao Đỗ Mười -> Vành đai 3 trên cao -> Cầu Thanh Trì -> Cao tốc Hà Nội - Hải Phòng (đi Đông) HOẶC Cầu Phù Đổng -> Ninh Hiệp -> QL3 mới (đi Tây); hoặc đi thẳng cao tốc Hà Nội - Bắc Giang để đi các tỉnh phía Bắc và ngược lại."
  },
  {
    from: "Phía Nam",
    to: "Tây Bắc",
    path: "Đường Hồ Chí Minh -> QL21A và ngược lại. Trường hợp từ các tỉnh phía Nam đi các tỉnh phía Tây có thể theo cao tốc Pháp Vân - Cầu Giẽ đến Đỗ Mười - Ngọc Hồi hoặc từ Quốc lộ 1A rẽ Phan Trọng Tuệ - Cầu Bươu - Văn Khê - Lê Trọng Tấn - Hoàng Tùng - đường gom Đại lộ Thăng Long - Tây Mỗ - Miêu Nha - Xuân Phương - Cầu Diễn - Hồ Tùng Mậu - Phạm Văn Đồng - cầu Thăng Long - Võ Văn Kiệt - Quốc lộ 2."
  },
  {
    from: "Phú Thọ",
    to: "Trung tâm Hà Nội",
    path: "Cầu Diễn -> Hồ Tùng Mậu HOẶC QL21 -> QL6 -> Quang Trung -> Trần Phú -> Nguyễn Trãi. (Hạn chế vào Đại lộ Thăng Long)."
  }
];