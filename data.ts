import { BanSchedule, RouteGuide, RoadGroup } from './types';

export const ROAD_DATA: RoadGroup[] = [
  {
    "group": "Cấm triệt để (Màu Đỏ)",
    "roads": [
      {
        "name": "Phạm Hùng",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Ngã tư Mễ Trì, Hà Nội",
        "destination": "Trần Duy Hưng, Hà Nội",
        "note": "Xe tải, khách >16 chỗ",
        "cachedPath": [
          [21.0185, 105.7841], [21.0160, 105.7845], [21.0140, 105.7850], 
          [21.0110, 105.7890], [21.0085, 105.7920], [21.0075, 105.7935]
        ]
      },
      {
        "name": "Đại lộ Thăng Long",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Phạm Hùng, Hà Nội",
        "destination": "Đường gom Lê Quang Đạo, Hà Nội",
        "note": "Làn tiếp giáp Trung tâm Hội nghị Quốc gia",
        "cachedPath": [
          [21.0075, 105.7935], [21.0080, 105.7880], [21.0078, 105.7830], 
          [21.0075, 105.7780], [21.0070, 105.7725]
        ]
      },
      {
        "name": "Trần Hữu Dực",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Đầu đường Trần Hữu Dực, Hà Nội",
        "destination": "Cuối đường Trần Hữu Dực, Hà Nội",
        "note": "Toàn tuyến",
        "cachedPath": [[21.0350, 105.7660], [21.0325, 105.7550], [21.0300, 105.7480]]
      },
      {
        "name": "Lê Đức Thọ",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Đầu đường Lê Đức Thọ, Hà Nội",
        "destination": "Cuối đường Lê Đức Thọ, Hà Nội",
        "note": "Toàn tuyến",
        "cachedPath": [[21.0170, 105.7700], [21.0250, 105.7680], [21.0350, 105.7660]]
      },
      {
        "name": "Lê Quang Đạo",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Đầu đường Lê Quang Đạo, Hà Nội",
        "destination": "Cuối đường Lê Quang Đạo, Hà Nội",
        "note": "Toàn tuyến",
        "cachedPath": [[21.0070, 105.7725], [21.0120, 105.7710], [21.0170, 105.7700]]
      },
      {
        "name": "Đỗ Đức Dục",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Đầu đường Đỗ Đức Dục, Hà Nội",
        "destination": "Cuối đường Đỗ Đức Dục, Hà Nội",
        "note": "Toàn tuyến",
        "cachedPath": [[21.0130, 105.7850], [21.0080, 105.7865], [21.0030, 105.7880]]
      },
      {
        "name": "Miếu Đầm",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Đầu đường Miếu Đầm, Hà Nội",
        "destination": "Cuối đường Miếu Đầm, Hà Nội",
        "note": "Toàn tuyến",
        "cachedPath": [[21.0080, 105.7885], [21.0075, 105.7890]]
      },
      {
        "name": "Trần Duy Hưng",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Đầu đường Trần Duy Hưng, Hà Nội",
        "destination": "Cuối đường Trần Duy Hưng, Hà Nội",
        "note": "Toàn tuyến",
        "cachedPath": [[21.0075, 105.7935], [21.0090, 105.7980], [21.0105, 105.8010], [21.0120, 105.8020]]
      },
      {
        "name": "Khuất Duy Tiến",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Lê Văn Lương, Hà Nội",
        "destination": "Phạm Hùng, Hà Nội",
        "note": "Đoạn từ Lê Văn Lương đến Phạm Hùng",
        "cachedPath": [[21.0005, 105.7965], [21.0030, 105.7955], [21.0050, 105.7945], [21.0075, 105.7935]]
      },
      {
        "name": "Nguyễn Chí Thanh",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Đầu đường Nguyễn Chí Thanh, Hà Nội",
        "destination": "Cuối đường Nguyễn Chí Thanh, Hà Nội",
        "note": "Toàn tuyến",
        "cachedPath": [[21.0120, 105.8020], [21.0180, 105.8060], [21.0220, 105.8090], [21.0270, 105.8130]]
      },
      {
        "name": "Liễu Giai",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Nguyễn Chí Thanh, Hà Nội",
        "destination": "Phan Kế Bính, Hà Nội",
        "note": "Đoạn Nguyễn Chí Thanh - Phan Kế Bính",
        "cachedPath": [[21.0300, 105.8150], [21.0325, 105.8160], [21.0350, 105.8170]]
      },
      {
        "name": "Đào Tấn",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Đầu đường Đào Tấn, Hà Nội",
        "destination": "Cuối đường Đào Tấn, Hà Nội",
        "note": "Toàn tuyến",
        "cachedPath": [[21.0330, 105.8120], [21.0335, 105.8080], [21.0340, 105.8050]]
      },
      {
        "name": "Kim Mã",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Đầu đường Kim Mã, Hà Nội",
        "destination": "Cuối đường Kim Mã, Hà Nội",
        "note": "Toàn tuyến",
        "cachedPath": [[21.0315, 105.8130], [21.0320, 105.8180], [21.0310, 105.8230], [21.0300, 105.8280]]
      },
      {
        "name": "Vạn Phúc",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Đầu đường Vạn Phúc, Hà Nội",
        "destination": "Cuối đường Vạn Phúc, Hà Nội",
        "note": "Toàn tuyến",
        "cachedPath": [[21.0340, 105.8170], [21.0360, 105.8175], [21.0380, 105.8180]]
      },
      {
        "name": "Nguyễn Thái Học",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Đầu đường Nguyễn Thái Học, Hà Nội",
        "destination": "Cuối đường Nguyễn Thái Học, Hà Nội",
        "note": "Toàn tuyến",
        "cachedPath": [[21.0300, 105.8280], [21.0298, 105.8320], [21.0295, 105.8350], [21.0290, 105.8400]]
      },
      {
        "name": "Trần Phú",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Đầu đường Trần Phú, Ba Đình, Hà Nội",
        "destination": "Cuối đường Trần Phú, Ba Đình, Hà Nội",
        "note": "Toàn tuyến",
        "cachedPath": [[21.0300, 105.8280], [21.0310, 105.8320], [21.0320, 105.8380]]
      },
      {
        "name": "Hùng Vương",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Đầu đường Hùng Vương, Hà Nội",
        "destination": "Cuối đường Hùng Vương, Hà Nội",
        "note": "Toàn tuyến",
        "cachedPath": [[21.0360, 105.8365], [21.0380, 105.8368], [21.0400, 105.8370]]
      },
      {
        "name": "Chu Văn An",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Đầu đường Chu Văn An, Hà Nội",
        "destination": "Cuối đường Chu Văn An, Hà Nội",
        "note": "Toàn tuyến",
        "cachedPath": [[21.0310, 105.8370], [21.0320, 105.8375], [21.0330, 105.8380]]
      },
      {
        "name": "Hoàng Diệu",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Đầu đường Hoàng Diệu, Hà Nội",
        "destination": "Cuối đường Hoàng Diệu, Hà Nội",
        "note": "Toàn tuyến",
        "cachedPath": [[21.0350, 105.8400], [21.0335, 105.8402], [21.0320, 105.8405]]
      },
      {
        "name": "Độc Lập",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Đầu đường Độc Lập, Hà Nội",
        "destination": "Cuối đường Độc Lập, Hà Nội",
        "note": "Toàn tuyến",
        "cachedPath": [[21.0365, 105.8350], [21.0358, 105.8352], [21.0350, 105.8355]]
      },
      {
        "name": "Lê Hồng Phong",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Đầu đường Lê Hồng Phong, Hà Nội",
        "destination": "Cuối đường Lê Hồng Phong, Hà Nội",
        "note": "Toàn tuyến",
        "cachedPath": [[21.0335, 105.8355], [21.0338, 105.8370], [21.0340, 105.8380]]
      },
      {
        "name": "Hoàng Văn Thụ",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Đầu đường Hoàng Văn Thụ, Hà Nội",
        "destination": "Cuối đường Hoàng Văn Thụ, Hà Nội",
        "note": "Toàn tuyến",
        "cachedPath": [[21.0375, 105.8350], [21.0378, 105.8375], [21.0380, 105.8400]]
      },
      {
        "name": "Nguyễn Tri Phương",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Đầu đường Nguyễn Tri Phương, Hà Nội",
        "destination": "Cuối đường Nguyễn Tri Phương, Hà Nội",
        "note": "Toàn tuyến",
        "cachedPath": [[21.0340, 105.8410], [21.0310, 105.8412], [21.0280, 105.8415]]
      },
      {
        "name": "Điện Biên Phủ",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Đầu đường Điện Biên Phủ, Hà Nội",
        "destination": "Cuối đường Điện Biên Phủ, Hà Nội",
        "note": "Toàn tuyến",
        "cachedPath": [[21.0290, 105.8400], [21.0310, 105.8402], [21.0330, 105.8390]]
      },
      {
        "name": "Lê Duẩn",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Điện Biên Phủ, Hà Nội",
        "destination": "Nguyễn Du, Hà Nội",
        "note": "Đoạn Điện Biên Phủ - Nguyễn Du",
        "cachedPath": [[21.0322, 105.8402], [21.0290, 105.8410], [21.0245, 105.8415], [21.0200, 105.8422]]
      },
      {
        "name": "Hàng Lọng",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Đường Lê Duẩn (Hàng Lọng), Hà Nội",
        "destination": "Đường Lê Duẩn (Hàng Lọng), Hà Nội",
        "note": "Khu vực Ga Hà Nội",
        "cachedPath": [[21.0250, 105.8415], [21.0240, 105.8420]]
      },
      {
        "name": "Trần Bình Trọng",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Đầu phố Trần Bình Trọng, Hà Nội",
        "destination": "Cuối phố Trần Bình Trọng, Hà Nội",
        "note": "Toàn tuyến",
        "cachedPath": [[21.0225, 105.8430], [21.0215, 105.8432], [21.0200, 105.8435]]
      },
      {
        "name": "Trần Hưng Đạo",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Quang Trung, Hà Nội",
        "destination": "Quán Sứ, Hà Nội",
        "note": "Đoạn Quang Trung - Quán Sứ",
        "cachedPath": [[21.0228, 105.8425], [21.0235, 105.8445], [21.0242, 105.8458]]
      },
      {
        "name": "Quán Sứ",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Đầu phố Quán Sứ, Hà Nội",
        "destination": "Cuối phố Quán Sứ, Hà Nội",
        "note": "Toàn tuyến",
        "cachedPath": [[21.0255, 105.8458], [21.0245, 105.8455], [21.0210, 105.8450]]
      },
      {
        "name": "Tràng Thi",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Đầu phố Tràng Thi, Hà Nội",
        "destination": "Cuối phố Tràng Thi, Hà Nội",
        "note": "Toàn tuyến",
        "cachedPath": [[21.0265, 105.8480], [21.0262, 105.8450], [21.0260, 105.8420]]
      },
      {
        "name": "Vành đai 3 trên cao",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Cầu Thăng Long, Hà Nội",
        "destination": "Nút giao Quốc lộ 5, Hà Nội",
        "note": "Cấm ô tô >10 tấn, 6h-21h",
        "cachedPath": [
            [21.0965, 105.7845], [21.0700, 105.7830], [21.0450, 105.7800], 
            [21.0360, 105.7810], [21.0185, 105.7841], [21.0075, 105.7935], 
            [21.0005, 105.7965], [20.9920, 105.7970], [20.9700, 105.8150],
            [20.9600, 105.8300], [21.0000, 105.9000]
        ]
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
        "origin": "Đầu đường Hoàng Hoa Thám, Hà Nội",
        "destination": "Cuối đường Hoàng Hoa Thám, Hà Nội",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.0435, 105.8130], [21.0425, 105.8180], [21.0410, 105.8250], [21.0390, 105.8300], [21.0380, 105.8350]]
      },
      {
        "name": "Thanh Niên",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Đầu đường Thanh Niên, Hà Nội",
        "destination": "Cuối đường Thanh Niên, Hà Nội",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.0480, 105.8350], [21.0450, 105.8380], [21.0420, 105.8420]]
      },
      {
        "name": "Thụy Khuê",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Đầu đường Thụy Khuê, Hà Nội",
        "destination": "Cuối đường Thụy Khuê, Hà Nội",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.0430, 105.8150], [21.0400, 105.8250], [21.0380, 105.8320]]
      },
      {
        "name": "Nghi Tàm",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Đầu đường Nghi Tàm, Hà Nội",
        "destination": "Cuối đường Nghi Tàm, Hà Nội",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.0550, 105.8350], [21.0600, 105.8300]]
      },
      {
        "name": "Âu Cơ",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Đầu đường Âu Cơ, Hà Nội",
        "destination": "Cuối đường Âu Cơ, Hà Nội",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.0650, 105.8300], [21.0700, 105.8200], [21.0800, 105.8150]]
      },
      {
        "name": "An Dương Vương",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Đầu đường An Dương Vương, Hà Nội",
        "destination": "Cuối đường An Dương Vương, Hà Nội",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.0800, 105.8150], [21.0900, 105.8000]]
      },
      {
        "name": "Yên Phụ",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Đầu đường Yên Phụ, Hà Nội",
        "destination": "Cuối đường Yên Phụ, Hà Nội",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.0450, 105.8450], [21.0400, 105.8500]]
      },
      {
        "name": "Trần Nhật Duật",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Đầu đường Trần Nhật Duật, Hà Nội",
        "destination": "Cuối đường Trần Nhật Duật, Hà Nội",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.0360, 105.8550], [21.0300, 105.8600]]
      },
      {
        "name": "Hai Bà Trưng",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Đầu đường Hai Bà Trưng, Hà Nội",
        "destination": "Cuối đường Hai Bà Trưng, Hà Nội",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.0250, 105.8500], [21.0245, 105.8450], [21.0240, 105.8400]]
      },
      {
        "name": "Láng",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Đầu đường Láng, Hà Nội",
        "destination": "Cuối đường Láng, Hà Nội",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.0320, 105.8020], [21.0150, 105.8050], [21.0050, 105.8100], [21.0020, 105.8150]]
      },
      {
        "name": "Láng Hạ",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Đầu đường Láng Hạ, Hà Nội",
        "destination": "Cuối đường Láng Hạ, Hà Nội",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.0180, 105.8060], [21.0160, 105.8250]]
      },
      {
        "name": "Lê Văn Lương",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Đầu đường Lê Văn Lương, Hà Nội",
        "destination": "Cuối đường Lê Văn Lương, Hà Nội",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.0070, 105.8000], [21.0030, 105.8180]]
      },
      {
        "name": "Mễ Trì",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Đầu đường Mễ Trì, Hà Nội",
        "destination": "Cuối đường Mễ Trì, Hà Nội",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.0150, 105.7780], [21.0120, 105.7600]]
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