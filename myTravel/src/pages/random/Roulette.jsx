import React, { useState } from 'react';

const cities = [
  '서울특별시','부산광역시','대구광역시','인천광역시','광주광역시','대전광역시','울산광역시','세종특별자치시', '충청도','경기도','전라도','강원도','경상도','제주도'
];

const regions = {
  충청도: ["공주시", "천안시", "아산시", "논산시", "계룡시", "보령시", "서산시", "청주시", "충주시", "제천시"],
  경기도: ["수원시", "고양시", "용인시", "성남시", "부천시", "안산시", "안양시", "평택시", "의정부시", "시흥시", "파주시", "김포시", "광주시", "광명시", "군포시", "오산시", "이천시", "안성시", "구리시", "남양주시", "포천시", "의왕시", "하남시", "여주시", "동두천시"],
  전라도: ["목포시", "여수시", "순천시", "나주시", "광양시", "전주시", "군산시", "익산시", "정읍시", "남원시"],
  강원도: ["춘천시", "원주시", "강릉시", "동해시", "태백시", "삼척시", "속초시"],
  경상도: ["창원시", "김해시", "진주시", "양산시", "거제시", "통영시", "사천시", "밀양시", "포항시", "경주시", "구미시", "안동시", "김천시", "상주시", "문경시", "영주시"],
};

const Roulette = ({ onSelect }) => {
  const [rotateDeg, setRotateDeg] = useState(0);
  const center = 250;
  const radius = 240;
  const angle = 360 / cities.length;

  const polarToCartesian = (angleDeg) => {
    const rad = (angleDeg - 90) * (Math.PI / 180);
    return {
      x: center + radius * Math.cos(rad),
      y: center + radius * Math.sin(rad),
    };
  };

  const getPath = (startAngle, endAngle) => {
    const start = polarToCartesian(startAngle);
    const end = polarToCartesian(endAngle);
    const largeArc = endAngle - startAngle <= 180 ? 0 : 1;
    return [
      `M ${center} ${center}`,
      `L ${start.x} ${start.y}`,
      `A ${radius} ${radius} 0 ${largeArc} 1 ${end.x} ${end.y}`,
      "Z",
    ].join(" ");
  };

  const spin = () => {
    const randomDeg = 360 * 5 + Math.floor(Math.random() * 360);
    const totalDeg = rotateDeg + randomDeg;

    setRotateDeg(totalDeg);

    setTimeout(() => {
      const normalizedDeg = totalDeg % 360;
      const selectedIndex = Math.floor((360 - normalizedDeg + angle / 2 - 12) % 360 / angle);
      let selected = cities[selectedIndex];

      if (regions[selected]) {
        const regionCities = regions[selected];
        const randomCity = regionCities[Math.floor(Math.random() * regionCities.length)];
        selected = randomCity;
      }

      onSelect(selected);
    }, 4000);
  };

  return (
    <div style={{ position: "relative", width: `${center * 2}px`, height: `${center * 2}px`, margin: "0 auto" }}>
      <div
        style={{
          position: "absolute",
          top: -50,
          left: "50%",
          transform: "translateX(-50%) rotate(180deg)",
          width: 0,
          height: 0,
          borderLeft: "45px solid transparent",
          borderRight: "45px solid transparent",
          borderBottom: "90px solid var(--point-color)",
          zIndex: 10,
        }}
      />

      <svg width={center * 2} height={center * 2}>
        <g
          style={{
            transition: "transform 4s cubic-bezier(0.33, 1, 0.68, 1)",
            transform: `rotate(${rotateDeg}deg)`,
            transformOrigin: "50% 50%",
          }}
        >
          {cities.map((city, i) => {
            const start = i * angle;
            const end = start + angle;
            return (
              <g key={i}>
                <path
                  d={getPath(start, end)}
                  fill={i % 2 === 0 ? "#A4A4A4" : "#616161"}
                  stroke="#fff"
                />
                <text
                  x={center}
                  y={center - radius + 40}
                  transform={`rotate(${angle * i + angle / 2} ${center} ${center})`}
                  textAnchor="middle"
                  fill="#fff"
                  fontSize="10"
                  alignmentBaseline="middle"
                >
                  {city}
                </text>
              </g>
            );
          })}
        </g>
      </svg>

      <div
        onClick={spin}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 100,
          height: 100,
          backgroundColor: "#f1f1f1",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          cursor: "pointer",
          zIndex: 5,
          boxShadow: "0 0 10px rgba(0,0,0,0.2)"
        }}
      >
        <span style={{ fontWeight: "bold", fontSize: "16px" }}>출발</span>
        <span style={{ fontWeight: "bold", fontSize: "16px" }}>준비 완료!</span>
      </div>
    </div>
  );
};

export default Roulette;
