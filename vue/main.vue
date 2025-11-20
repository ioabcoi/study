import { useState, useEffect, useRef } from 'react';

export default function StickyTabsDemo() {
  const [activeTab, setActiveTab] = useState('sec1');
  const [isScrollingByClick, setIsScrollingByClick] = useState(false);
  const [isStickyFixed, setIsStickyFixed] = useState(true);
  const sectionsRef = useRef({});
  const lastSecRef = useRef(null);

  const tabs = [
    { id: 'sec1', label: '섹션 1' },
    { id: 'sec2', label: '섹션 2' },
    { id: 'sec3', label: '섹션 3' },
  ];

  const sections = [
    { id: 'sec1', title: '섹션 1', content: '여기가 첫 번째 콘텐츠입니다.' },
    { id: 'sec2', title: '섹션 2', content: '여기가 두 번째 콘텐츠입니다.' },
    { id: 'sec3', title: '섹션 3', content: '여기가 세 번째 콘텐츠입니다.' },
  ];

  // 탭 클릭 핸들러
  const handleTabClick = (tabId) => {
    setIsScrollingByClick(true);
    setActiveTab(tabId);

    const element = sectionsRef.current[tabId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    setTimeout(() => {
      setIsScrollingByClick(false);
    }, 500);
  };

  // 스크롤 이벤트 리스너
  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingByClick) return;

      const scrollY = window.scrollY;
      const offset = 200;

      Object.entries(sectionsRef.current).forEach(([secId, element]) => {
        if (!element) return;
        const rect = element.getBoundingClientRect();
        const top = rect.top + scrollY;
        const bottom = top + element.offsetHeight;

        if (scrollY + offset >= top && scrollY + offset < bottom) {
          setActiveTab(secId);
        }
      });
    };

    const handleCheckSticky = () => {
      if (lastSecRef.current) {
        const rect = lastSecRef.current.getBoundingClientRect();
        const lastSecBottomPass = rect.bottom < 0;
        setIsStickyFixed(!lastSecBottomPass);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleCheckSticky);
    window.addEventListener('resize', handleCheckSticky);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleCheckSticky);
      window.removeEventListener('resize', handleCheckSticky);
    };
  }, [isScrollingByClick]);

  return (
    <div className="demo-container">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          scroll-behavior: smooth;
        }

        .demo-container {
          padding: 3%;
          background-color: #ccc;
          font-size: 20px;
        }

        header, footer {
          padding: 15px;
          background-color: white;
          border: 5px solid #222;
          border-radius: 10px;
          color: #222;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          margin-bottom: 3%;
        }

        .wrapper {
          display: flex;
          justify-content: space-between;
          gap: 3%;
          margin: 3% 0;
        }

        aside {
          width: 25%;
          height: 25vh;
          min-height: 200px;
          padding: 15px;
          background-color: white;
          border: 5px solid #222;
          border-radius: 10px;
          color: #222;
          overflow: auto;
          position: sticky;
          top: 3%;
        }

        main {
          width: 70%;
          padding: 15px;
          background-color: white;
          border: 5px solid #222;
          border-radius: 10px;
          color: #222;
        }

        .tabs {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
          position: sticky;
          top: 3%;
          background-color: white;
          padding: 10px 0;
          border-radius: 8px;
          z-index: 10;
        }

        .tabs.unfix {
          position: static;
        }

        .tabs button {
          padding: 10px 20px;
          border: 2px solid #222;
          background: #eee;
          cursor: pointer;
          font-size: 18px;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .tabs button:hover {
          background: #ddd;
        }

        .tabs button.active {
          background: #222;
          color: #fff;
        }

        section {
          padding: 120px 0;
          border-bottom: 3px dotted #999;
          min-height: 500px;
        }

        section:last-child {
          border-bottom: none;
        }

        h2 {
          margin-bottom: 20px;
          font-size: 24px;
        }

        h3 {
          margin-top: 20px;
          margin-bottom: 10px;
          font-size: 20px;
        }

        p {
          margin-bottom: 10px;
          line-height: 1.6;
        }

        a {
          color: #0066cc;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }

        pre {
          background-color: #ccc;
          padding: 10px;
          border-radius: 5px;
          overflow-x: auto;
          margin: 10px 0;
        }

        footer {
          margin-top: 3%;
        }
      `}</style>

      <header>Header</header>

      <div className="wrapper">
        <aside>
          <h3>Sticky Sidebar</h3>
          <p>I will follow you!</p>
          <p>
            <a href="https://caniuse.com/#search=sticky" target="_blank" rel="noopener noreferrer">
              caniuse stats
            </a>
          </p>
        </aside>

        <main>
          <h2>Main Content</h2>
          <p>Scroll down the page!</p>
          <h3>How to recreate this</h3>

          <div className={`tabs ${!isStickyFixed ? 'unfix' : ''}`}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={activeTab === tab.id ? 'active' : ''}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {sections.map((section, idx) => (
            <section
              key={section.id}
              id={section.id}
              ref={(el) => {
                if (el) sectionsRef.current[section.id] = el;
                if (idx === sections.length - 1) lastSecRef.current = el;
              }}
            >
              <h2>{section.title}</h2>
              <p>{section.content}</p>
              <p>이것은 스크롤 가능한 추가 콘텐츠입니다. 페이지를 스크롤하면서 탭이 자동으로 업데이트되는 것을 확인해보세요!</p>
            </section>
          ))}
        </main>
      </div>

      <footer>Footer</footer>
    </div>
  );
}