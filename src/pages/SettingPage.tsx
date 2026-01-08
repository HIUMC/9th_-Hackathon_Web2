import { useMemo } from "react";
import IconCheck from "../assets/icons/icon_check.svg?react";
import IconDark from "../assets/icons/icon_dark.svg?react";
import IconLight from "../assets/icons/icon_light.svg?react";
import CategoryCard from "../components/CategoryCard";
import Footer from "../components/Footer";
import { useThemeStore } from "../stores/useThemeStore";
import { useModalActions } from "../hooks/useModalStore";
import CategoryAddModal from "../components/Modals/CategoryAddModal";
import CategoryDeleteModal from "../components/Modals/CategoryDeleteModal";
import DeleteAllModal from "../components/Modals/DeleteAllModal";

type Category = {
  label: string;
  borderClassName: string;
};

const SettingPage = () => {
  const theme = useThemeStore((state) => state.mode);
  const setTheme = useThemeStore((state) => state.setMode);
  const { openModal } = useModalActions();

  const categories = useMemo<Category[]>(
    () => [
      { label: "월급", borderClassName: "border-main/25" },
      { label: "용돈", borderClassName: "border-[#F2A44B]/35" },
      { label: "식비", borderClassName: "border-[#FFB020]/35" },
      { label: "커피", borderClassName: "border-[#B07D62]/35" },
      { label: "생활용품", borderClassName: "border-[#8E5AF7]/25" },
      { label: "공과금", borderClassName: "border-[#9E77ED]/25" },
      { label: "이체/인출", borderClassName: "border-[#5C9DFF]/25" },
      { label: "유흥", borderClassName: "border-error/35" },
      { label: "금융", borderClassName: "border-finance/35" },
      { label: "교통/차량", borderClassName: "border-[#4F5BFF]/25" },
      { label: "기타", borderClassName: "border-200" },
    ],
    []
  );

  const renderDeleteAction = (label: string) => (
    <button 
      type="button" 
      className="text-400 hover:text-600" 
      aria-label={`${label} 삭제`}
      onClick={() => openModal('categoryDelete')}
    >
      삭제
    </button>
  );

  const handleDeleteAll = () => {
    openModal('deleteAll');
  };

  const handleAddCategory = () => {
    openModal('categoryAdd');
  };

  return (
    <div className="w-full h-full bg-100 px-8 pt-8 pb-10 overflow-y-auto"> {/* 스크롤 가능하게 overflow-y-auto 추가 */}
      <div className="w-full max-w-[980px] mx-auto"> {/* mx-auto로 중앙 정렬 */}
        <h1 className="text-900 text-[24px] font-semibold">설정</h1>

        {/* 다크모드 섹션 */}
        <section className="mt-8 flex items-start gap-10">
          <h2 className="w-[140px] text-600 text-[14px] font-semibold shrink-0">다크모드 설정</h2>
          <div className="flex items-center gap-3">
            <div className="inline-flex rounded-[10px] bg-white border border-200 overflow-hidden">
              <button
                type="button"
                onClick={() => setTheme("light")}
                className={[
                  "h-[42px] w-[140px] px-4",
                  "flex items-center justify-center gap-2",
                  "text-[14px] font-semibold",
                  "bg-[#FFFFFF] text-600",
                ].join(" ")}
              >
                <IconLight className="h-4 w-4" />
                Light
                {theme === "light" && <IconCheck className="ml-1 h-4 w-4 text-main" />}
              </button>
              <button
                type="button"
                onClick={() => setTheme("dark")}
                className={[
                  "h-[42px] w-[140px] px-4",
                  "flex items-center justify-center gap-2",
                  "text-[14px] font-semibold",
                  "bg-[#1A1A1A] text-white",
                ].join(" ")}
              >
                <IconDark className="h-4 w-4" style={{ color: "#FFFFFF" }} />
                <span className="text-white" style={{ color: "#FFFFFF" }}>
                  Dark
                </span>
                {theme === "dark" && <IconCheck className="ml-1 h-4 w-4 text-main" />}
              </button>
            </div>
          </div>
        </section>

        {/* 전체 삭제 섹션 */}
        <section className="mt-8 flex items-start gap-10">
          <h2 className="w-[140px] text-600 text-[14px] font-semibold shrink-0">전체 내역 삭제</h2>
          <button
            type="button"
            onClick={handleDeleteAll} // 연결됨
            className={[
              "h-[42px] px-4 rounded-[10px]",
              "inline-flex items-center gap-2",
              "border border-mainvariant bg-white",
              "text-error text-[14px] font-semibold",
              "hover:bg-100/70",
            ].join(" ")}
          >
            전체 내역 삭제하기
          </button>
        </section>

        {/* 카테고리 설정 섹션 */}
        <section className="mt-10 flex items-start gap-10">
          <h2 className="w-[140px] text-600 text-[14px] font-semibold shrink-0">카테고리 설정</h2>
          <div className="flex-1">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <CategoryCard
                  key={category.label}
                  label={category.label}
                  borderClassName={category.borderClassName}
                  action={renderDeleteAction(category.label)}
                />
              ))}
              
              {/* 추가 버튼 */}
              <button
                type="button"
                onClick={handleAddCategory} // 연결됨
                className={[
                  "w-[234px] shrink-0", // shrink-0 필수
                  "flex items-center justify-center",
                  "rounded-[8px] border border-200 bg-white",
                  "px-[28px] py-[24px]",
                  "text-600 hover:text-800 hover:border-400",
                ].join(" ")}
                aria-label="카테고리 추가"
              >
                +
              </button>
            </div>
          </div>
        </section>
      </div>

      <footer className="mt-10">
        <Footer />
      </footer>
      <CategoryAddModal />
      <CategoryDeleteModal />
      <DeleteAllModal />
    </div>
  );
};

export default SettingPage;