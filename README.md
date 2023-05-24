# reactnative_advance_example

해당 앱은 ReactNative를 사용하면서 주요 기술과 코드 스타일 등을 기록하는 곳 입니다.

# Src 디렉토리 구조

```
|-api					> api 관련 파일들(axios설정 및 reactQuery 설정)
|-assets				> 정적 요소들
	|-fonts
  |-icons
  |-images
|-constants				> 상수 값
	|-index.ts			> 화면비율 및 폰트값 등
  |- ...
|-utils				> 주로 사용하는 함수 및 설정 함수
	|- ...			일
|-atoms					> atom-design 원자
	|-Button
    	|-Button.tsx
	|-Text
        |-Text.tsx
|-components			> atom-design 분자 + 유기체 (원자들로 구성 / 재사용이 높은 컴포넌트들 / 도메인별로 폴더 구분하지 않음)
	|-card
    |-Card.tsx
    |-types.ts
    |- ...
  |-others
    |-otherComponents.tsx
    |-otherTypes.ts
  |-...
|-navigation                    > 화면의 페이지 및 타입 정의
  |-navigation.tsx              > NavigationContainer 위치
  |-RootStackNavigator
    |-RootStackNavigator.tsx    > 각 페이지별 stack
    |-types.ts                  > page stack의 타입 설정
|-hooks					> 비즈니스 로직 중 hook들
	|-useAddLog.js		>도메인에 상관없이 개별 hook 파일들

> atom-design (비즈니스 로직 없는 UI 뷰만 표시 / 해당 도메인에서만 사용되는 작은 컴포넌트 들 또는 전체 페이지의 UI 구조)
|-screens				> 도메인별 폴더
  |- Home
    |- Home.tsx
  |- ...
```

asd
