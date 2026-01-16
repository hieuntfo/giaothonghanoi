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
        "cachedPath": [[21.02985, 105.76015]] // Giữa đoạn Florence Tower
      },
      {
        "name": "Lê Đức Thọ",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Hồ Tùng Mậu",
        "destination": "Sân vận động Mỹ Đình",
        "note": "Toàn tuyến",
        "cachedPath": [[21.02350, 105.76800]] // Đoạn giữa Hàm Nghi và SVĐ
      },
      {
        "name": "Lê Quang Đạo",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Sân vận động Mỹ Đình",
        "destination": "Đại lộ Thăng Long",
        "note": "Toàn tuyến",
        "cachedPath": [[21.01350, 105.77080]] // Đoạn cổng làng Phú Đô
      },
      {
        "name": "Phạm Hùng",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Ngã tư Mai Dịch",
        "destination": "Trần Duy Hưng (Big C)",
        "note": "Xe tải, khách >16 chỗ",
        "cachedPath": [[21.01550, 105.78450]] // Đoạn Landmark 72 / Keangnam
      },
      {
        "name": "Đỗ Đức Dục",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Phạm Hùng (Bảo tàng HN)",
        "destination": "Miếu Đầm",
        "note": "Toàn tuyến",
        "cachedPath": [[21.00680, 105.78650]] // Chính giữa cổng Khách sạn Marriott
      },
      {
        "name": "Miếu Đầm",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Đỗ Đức Dục",
        "destination": "Đại lộ Thăng Long",
        "note": "Toàn tuyến",
        "cachedPath": [[21.00850, 105.78700]] // Cầu vượt Mễ Trì ra Đại lộ
      },
      {
        "name": "Mễ Trì",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Phạm Hùng",
        "destination": "Lê Quang Đạo",
        "note": "Toàn tuyến",
        "cachedPath": [[21.01320, 105.77900]] // Đoạn The Manor / Sudico
      },
      {
        "name": "Đại lộ Thăng Long",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Phạm Hùng",
        "destination": "Lê Quang Đạo",
        "note": "Làn tiếp giáp Trung tâm Hội nghị Quốc gia",
        "cachedPath": [[21.00710, 105.78150]] // Đường gom trước cổng NCC
      },
      {
        "name": "Trần Duy Hưng",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Hầm chui Trung Hòa",
        "destination": "Cầu vượt Nguyễn Chí Thanh",
        "note": "Toàn tuyến",
        "cachedPath": [[21.01100, 105.80050]] // Đoạn Euclid / Grand Plaza
      },
      {
        "name": "Nguyễn Chí Thanh",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Trần Duy Hưng",
        "destination": "Kim Mã / Liễu Giai",
        "note": "Toàn tuyến",
        "cachedPath": [[21.02250, 105.80950]] // Đoạn Hồ Ngọc Khánh / Ban Cơ Yếu
      },
      {
        "name": "Liễu Giai",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Nguyễn Chí Thanh",
        "destination": "Phan Kế Bính",
        "note": "Đoạn Nguyễn Chí Thanh - Phan Kế Bính",
        "cachedPath": [[21.03250, 105.81600]] // Đoạn Metropolis / ĐSQ Úc
      },
      {
        "name": "Đào Tấn",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Liễu Giai",
        "destination": "Bưởi",
        "note": "Toàn tuyến",
        "cachedPath": [[21.03350, 105.80900]] // Đoạn hồ Công viên Thủ Lệ
      },
      {
        "name": "Kim Mã",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Liễu Giai (Daewoo)",
        "destination": "Sơn Tây / Nguyễn Thái Học",
        "note": "Toàn tuyến",
        "cachedPath": [[21.03100, 105.82400]] // Đoạn ngã tư Núi Trúc
      },
      {
        "name": "Khuất Duy Tiến",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Lê Văn Lương",
        "destination": "Phạm Hùng",
        "note": "Đoạn từ Lê Văn Lương đến Phạm Hùng",
        "cachedPath": [[21.00050, 105.79800]] // Đoạn gần Licogi / Ngụy Như Kon Tum
      },
      {
        "name": "Vạn Phúc",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Liễu Giai",
        "destination": "Hoàng Hoa Thám",
        "note": "Toàn tuyến",
        "cachedPath": [[21.03720, 105.81800]] // Khu Ngoại giao đoàn
      },
      {
        "name": "Nguyễn Thái Học",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Kim Mã",
        "destination": "Cửa Nam",
        "note": "Toàn tuyến",
        "cachedPath": [[21.02960, 105.83650]] // Bảo tàng Mỹ thuật
      },
      {
        "name": "Trần Phú",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Kim Mã",
        "destination": "Điện Biên Phủ",
        "note": "Toàn tuyến",
        "cachedPath": [[21.03180, 105.83600]] // Bệnh viện Xanh Pôn
      },
      {
        "name": "Hùng Vương",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Hoàng Hoa Thám",
        "destination": "Nguyễn Thái Học",
        "note": "Toàn tuyến",
        "cachedPath": [[21.03700, 105.83730]] // Quảng trường Ba Đình
      },
      {
        "name": "Chu Văn An",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Điện Biên Phủ",
        "destination": "Nguyễn Thái Học",
        "note": "Toàn tuyến",
        "cachedPath": [[21.03250, 105.83750]] // Bộ Ngoại giao cũ
      },
      {
        "name": "Hoàng Diệu",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Phan Đình Phùng",
        "destination": "Nguyễn Thái Học",
        "note": "Toàn tuyến",
        "cachedPath": [[21.03450, 105.84050]] // Hoàng Thành Thăng Long
      },
      {
        "name": "Độc Lập",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Điện Biên Phủ",
        "destination": "Hoàng Văn Thụ",
        "note": "Toàn tuyến",
        "cachedPath": [[21.03620, 105.83520]] // Trước Lăng Bác
      },
      {
        "name": "Lê Hồng Phong",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Đội Cấn",
        "destination": "Điện Biên Phủ",
        "note": "Toàn tuyến",
        "cachedPath": [[21.03380, 105.83650]] // Bảo tàng Hồ Chí Minh
      },
      {
        "name": "Hoàng Văn Thụ",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Hoàng Diệu",
        "destination": "Độc Lập",
        "note": "Toàn tuyến",
        "cachedPath": [[21.03780, 105.83900]] // Trụ sở Trung ương Đảng
      },
      {
        "name": "Nguyễn Tri Phương",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Phan Đình Phùng",
        "destination": "Điện Biên Phủ",
        "note": "Toàn tuyến",
        "cachedPath": [[21.03200, 105.84120]]
      },
      {
        "name": "Điện Biên Phủ",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Cửa Nam",
        "destination": "Lăng Bác",
        "note": "Toàn tuyến",
        "cachedPath": [[21.03150, 105.83950]] // Cột cờ Hà Nội
      },
      {
        "name": "Lê Duẩn",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Điện Biên Phủ",
        "destination": "Nguyễn Du",
        "note": "Đoạn Điện Biên Phủ - Nguyễn Du",
        "cachedPath": [[21.02450, 105.84160]] // Ga Hà Nội
      },
      {
        "name": "Hàng Lọng",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Khu vực Ga Hà Nội",
        "destination": "Khu vực Ga Hà Nội",
        "note": "Đoạn qua Ga Hà Nội",
        "cachedPath": [[21.02450, 105.84160]] // Ga Hà Nội
      },
      {
        "name": "Trần Bình Trọng",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Trần Hưng Đạo",
        "destination": "Trần Nhân Tông",
        "note": "Toàn tuyến",
        "cachedPath": [[21.02150, 105.84320]] // Hồ Thiền Quang
      },
      {
        "name": "Trần Hưng Đạo",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Quang Trung",
        "destination": "Quán Sứ",
        "note": "Đoạn Quang Trung - Quán Sứ",
        "cachedPath": [[21.02350, 105.84450]] // Cung Văn hóa Hữu nghị
      },
      {
        "name": "Quán Sứ",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Hai Bà Trưng",
        "destination": "Trần Hưng Đạo",
        "note": "Toàn tuyến",
        "cachedPath": [[21.02300, 105.84550]] // Viện K
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
        "cachedPath": [[20.97500, 105.81800]] // Đoạn Linh Đàm (điểm đại diện)
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
        "cachedPath": [[21.04250, 105.82500]] // Công viên Bách Thảo
      },
      {
        "name": "Thanh Niên",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Yên Phụ",
        "destination": "Hùng Vương",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.04550, 105.83850]] // Chùa Trấn Quốc
      },
      {
        "name": "Thụy Khuê",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Bưởi",
        "destination": "Mai Xuân Thưởng",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.04100, 105.82000]]
      },
      {
        "name": "Nghi Tàm",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Âu Cơ",
        "destination": "Yên Phụ",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.05800, 105.83200]] // Chợ hoa Quảng Bá
      },
      {
        "name": "Âu Cơ",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Cầu Nhật Tân",
        "destination": "Nghi Tàm",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.07200, 105.82200]] // Thung lũng hoa
      },
      {
        "name": "An Dương Vương",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Cầu Nhật Tân",
        "destination": "Cầu Thăng Long",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.08500, 105.81000]] // Phú Thượng
      },
      {
        "name": "Yên Phụ",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Nghi Tàm",
        "destination": "Trần Nhật Duật",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.04350, 105.84800]] // Điểm trung chuyển Long Biên
      },
      {
        "name": "Trần Nhật Duật",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Yên Phụ",
        "destination": "Trần Quang Khải",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.03450, 105.85650]] // Chân cầu Chương Dương
      },
      {
        "name": "Hai Bà Trưng",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Lê Thánh Tông",
        "destination": "Lê Duẩn",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.02480, 105.84850]] // Tràng Tiền Plaza
      },
      {
        "name": "Láng",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Cầu Giấy",
        "destination": "Ngã Tư Sở",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.01200, 105.80800]] // Đoạn cầu Yên Hòa - Láng Hạ
      },
      {
        "name": "Láng Hạ",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Láng",
        "destination": "Giảng Võ",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.01680, 105.81600]] // Rạp chiếu phim QG
      },
      {
        "name": "Lê Văn Lương",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Khuất Duy Tiến",
        "destination": "Láng",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.00550, 105.81000]] // Cầu vượt Hoàng Đạo Thúy
      },
      {
        "name": "Mễ Trì",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Lê Quang Đạo",
        "destination": "Phạm Hùng",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.01350, 105.78000]] // The Manor
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