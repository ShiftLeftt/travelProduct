import React, {useContext, useEffect, useState} from 'react';
import Calendar from 'react-calendar';
import { LocationContext } from '../../contexts/LocationContext';
import styles from './travelPlanBox.module.css';
import './travelPlanBox.calender.css';
import '../../styles/common.css';
import '../../styles/reset.css';
import {sqlInjectionValidation} from "../../util/Validation.js";
import {useSearch} from "../../hooks/useSearch.js";
import SearchList from "../MapUtil/SearchList.jsx";

export default function TravelPlanBox({ formatDate, getDuration, onClose, markers}) {
  const {
    selectedDates, setSelectedDates,
    selectedRegion, setSelectedRegion,
    selectedCity, setSelectedCity,
    searchKeyword, setSearchKeyword,
    step, setStep,
    tab, setTab,
    activeTab, setActiveTab,
    map,center
  } = useContext(LocationContext);
  const [hasSearched, setHasSearched] = useState(false);
  const {places, pagination, searchPage} = useSearch(searchKeyword, map, center, 5000);
  const [hoveredPlace, setHoveredPlace] = useState(null);

  const handlePageChange = page => {
    searchPage(page);
  };

  const handleAddPlace = (place) => {
    alert(`장소 추가 되었습니다.: ${place.place_name}`);
  }

  useEffect(() => {
    if(!hasSearched) return;
    setHasSearched(false);
  }, [places, searchKeyword]);



  // 드롭다운 열림/닫힘 상태: 로컬 컴포넌트 상태로 관리
  const [isRegionDropdownOpen, setIsRegionDropdownOpen] = useState(false);
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);

  // 검색어 입력 폼의 로컬 상태: inputKeyword -> 검색 버튼 클릭 시 Context로 전달
  const [inputKeyword, setInputKeyword] = useState('');

  const regions = [
    '특별시','광역시','특별자치시','충청북도','충청남도',
    '경기도','전라북도','전라남도','강원특별자치도',
    '경상북도','경상남도','제주특별자치도'
  ];

  const regionCities = {
    특별시: ['서울특별시'],
    광역시: ['광주광역시','대구광역시','대전광역시','부산광역시','울산광역시','인천광역시'],
    특별자치시: ['세종특별자치시'],
    경기도: ['고양시','과천시','광명시','광주시','구리시','군포시','김포시','남양주시','동두천시','부천시','성남시','수원시','시흥시','안산시','안성시','안양시','양주시','여주시','오산시','용인시','의왕시','의정부시','이천시','파주시','평택시','포천시','하남시','화성시'],
    충청북도: ['제천시','청주시','충주시'],
    충청남도: ['공주시','논산시','당진시','보령시','서산시','아산시','계룡시','천안시'],
    전라북도: ['군산시','김제시','남원시','전주시','정읍시','익산시'],
    전라남도: ['광양시','나주시','목포시','순천시','여수시'],
    강원특별자치도: ['강릉시','동해시','삼척시','속초시','원주시','춘천시','태백시'],
    경상북도: ['경산시','경주시','구미시','김천시','문경시','상주시','안동시','영주시','영천시','포항시'],
    경상남도: ['거제시','김해시','밀양시','사천시','양산시','창원시','진주시','통영시'],
    제주특별자치도: ['서귀포시','제주시']
  };


  const FoodList = () => <ul><li>음식</li></ul>;
  const CafeList = () => <ul><li>카페</li></ul>;



  /**
   * handleSelect: step 1에서 "다음 단계" 버튼 클릭 시 호출
   * - 날짜(2일 범위), 시·도, 도시가 모두 선택됐는지 검증
   * - 조건 충족 시 Context의 step을 2로 변경 → step 2 UI로 전환
   */
  const handleSelect = () => {
    if (!selectedRegion || !selectedCity || selectedDates.length !== 2) {
      alert('지역, 도시, 날짜를 모두 선택해주세요');
      return;
    }
    setStep(2);
  };

  const handleSearch = e => {
    e.preventDefault();
    const kw = inputKeyword.trim();
    if (!kw) {
      alert('검색어를 입력해주세요');
      return;
    }



    // SQL Injection 방지
    if(sqlInjectionValidation(kw)){
        alert('SQL Injection 방지를 위해 특수문자 사용이 제한됩니다.');
        setInputKeyword('');
        return;
    }
    setSearchKeyword(kw);
    setHasSearched(true);
  };

  return (
      <div className={`${styles.travelPlanBox} ${step ? styles.travelPlanBoxVisible : ''}`}>
        <div className={styles.travelPlanBoxContent}>
          {step === 1 && (
              <>
                <div className={styles.scheduleText}>
                  <h1>Journee와 함께 떠나는</h1>
                  <p>여행 기간이 어떻게 되시나요?</p>
                </div>
                <div className={styles.calendar}>
                <Calendar
                  onChange={date => setSelectedDates(Array.isArray(date) ? date : [date])}
                  value={selectedDates}
                  selectRange
                  minDate={new Date()}
                  formatDay={(locale, date) => date.getDate()}
                  next2Label={null}
                  prev2Label={null}
                  locale="en-US"
                  formatMonthYear={(locale, date) => `${date.getFullYear()}년 ${date.getMonth() + 1}월`}
                  formatShortWeekday={(locale, date) => ['일', '월', '화', '수', '목', '금', '토'][date.getDay()]}
                  tileClassName={({ date }) => {
                    if (!Array.isArray(selectedDates) || selectedDates.length !== 2) return null;
                
                    const [start, end] = selectedDates;
                
                    const isSameDay = (d1, d2) =>
                      d1.getFullYear() === d2.getFullYear() &&
                      d1.getMonth() === d2.getMonth() &&
                      d1.getDate() === d2.getDate();
                
                    const nextToStart = new Date(start);
                    nextToStart.setDate(start.getDate() + 1);
                
                    const prevToEnd = new Date(end);
                    prevToEnd.setDate(end.getDate() - 1);
                
                    if (isSameDay(date, start)) return "rangeStart";
                    if (isSameDay(date, end)) return "rangeEnd";
                    if (isSameDay(date, nextToStart)) return "inRange leftRounded";
                    if (isSameDay(date, prevToEnd)) return "inRange rightRounded";
                    if (date > start && date < end) return "inRange";
                
                    return null;
                  }}
                />
                  <div className={styles.calendarDivider}></div>
                </div>
                {selectedDates.length === 2 && (
                    <div className={styles.selectedDateInfo}>
                      <p>{formatDate(selectedDates[0])} ~ {formatDate(selectedDates[1])}</p>
                      <span className={styles.selectedDatePoint}>{getDuration()}</span>
                    </div>
                )}
                <div className={styles.select}>
                  <div className={styles.regionSelect}>
                    <h1>지역 선택</h1>
                    <button className={styles.regionToggle} onClick={() => { setIsRegionDropdownOpen(prev => !prev); setIsCityDropdownOpen(false); }}>
                      <span>{selectedRegion || '지역'}</span>
                      <img src={isRegionDropdownOpen ? '/img/collapseBtn.svg' : '/img/dropdownBtn.svg'} alt="dropdown" className={styles.dropdownIcon} />
                    </button>
                    {isRegionDropdownOpen && (
                        <div className={styles.regions}>
                          {regions.map(r => (
                              <button key={r} onClick={() => { setSelectedRegion(r); setSelectedCity(''); setIsRegionDropdownOpen(false); }}>{r}</button>
                          ))}
                        </div>
                    )}
                  </div>
                  <div className={styles.citySelect}>
                    <button className={styles.cityToggle} disabled={!selectedRegion} onClick={() => { setIsCityDropdownOpen(prev => !prev); setIsRegionDropdownOpen(false); }}>
                      <span>{selectedCity || '도시'}</span>
                      <img src={isCityDropdownOpen ? '/img/collapseBtn.svg' : '/img/dropdownBtn.svg'} alt="dropdown" className={styles.cityDropdownIcon} />
                    </button>
                    {selectedRegion && isCityDropdownOpen && (
                        <div className={styles.cityList}>
                          {regionCities[selectedRegion].map(c => (
                              <button key={c} onClick={() => { setSelectedCity(c); setIsCityDropdownOpen(false); }}>{c}</button>
                          ))}
                        </div>
                    )}
                  </div>
                </div>
                <button className={styles.nextBtn} onClick={handleSelect}>다음 단계</button>
              </>
          )}
          {step === 2 && (
              <>
                <div className={styles.regionText}>
                  <h1>{selectedCity || selectedRegion || '지역을 선택해주세요'}</h1>
                  <p>{selectedDates.length===2 ? `${formatDate(selectedDates[0])} - ${formatDate(selectedDates[1])}` : '날짜를 선택해주세요'}</p>
                </div>
                <div className={styles.tabWrapper}>
                  <button className={`${styles.tabLocation} ${tab==='select'?styles.active:''}`} onClick={()=>setTab('select')}>장소 선택</button>
                  <button className={`${styles.tabLocation} ${tab==='new'?styles.active:''}`} onClick={()=>setTab('new')}>여행할 장소</button>
                </div>
                {tab==='select' && (
                    <>
                      <form onSubmit={handleSearch} className={styles.searchBar}>
                        <input
                            type="text"
                            value={inputKeyword}
                            onChange={e => setInputKeyword(e.target.value)}
                            placeholder="장소를 입력해주세요"
                        />
                        <button type="submit"><img src="img/search.svg" alt="돋보기"/></button>
                      </form>
                      <div className={styles.tabMenu}>
                        {['명소', '음식', '카페'].map(name => (
                            <button key={name} className={activeTab === name ? styles.activeTab : styles.tab}
                                    onClick={() => setActiveTab(name)}>{name}</button>
                        ))}
                      </div>
                      <div className={styles.tabContent}>
                        {activeTab === '명소' }
                        {activeTab === '음식' && <FoodList/>}
                        {activeTab === '카페' && <CafeList/>}
                        <SearchList
                            marker={markers}
                          places={places}
                          pagination={pagination}
                          onItemHover={(place, idx) => setHoveredPlace({place, idx})}
                          onPageChange={handlePageChange}
                          onAdd={handleAddPlace}
                        />
                      </div>


                    </>
                )}
                <button className={styles.prevBtn} onClick={() => setStep(1)}>이전 단계</button>
                <button className={styles.confirmedBtn} onClick={onClose}>플랜확정</button>
              </>
          )}
        </div>
      </div>
  );
}
