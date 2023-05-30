# reactnative_advance_example

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/> <img src="https://img.shields.io/badge/React Native-61DAFB?style=flat-square&logo=React&logoColor=black"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"/> <img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white"/> <img src="https://img.shields.io/badge/Android-3DDC84?style=flat-square&logo=android&logoColor=white"/> <img src="https://img.shields.io/badge/Xcode-147EFB?style=flat-square&logo=Xcode&logoColor=white"/> <img src="https://img.shields.io/badge/Atom-66595C?style=flat-square&logo=Atom&logoColor=white"/>

해당 앱은 ReactNative를 사용하면서 주요 기술과 코드 스타일 등을 기록하는 곳 입니다.

# 적용한 부분
- Custom UI - Text, TextInput, Row 
- async-storage 예시 적용
- Redux-toolkit 예시 적용
- react-native-navigation의 환경설정과 screen 적용
- Custom Hook 사용법
- Axios 설정 & react-query(v3) 사용 예시 적용

# Src 디렉토리 구조

```
|-api 				> api 관련 파일들(axios설정 및 reactQuery 설정)
	|- index.tsx			> axios의 기본 설정 등의 설정
	|- user				> 호출하고자 하는 api의 endpoint에 맞추어 네이밍
	  |- user.ts
	  |- types.ts
	|- ...
|-assets				> 정적 요소들(폰트, 아이콘, 이미지)
	|-fonts
	|-icons
	|-images
|-constants				> 상수 값
	|-index.ts			> 화면비율 및 폰트값 등
  	|- ...
|-utils					> 주로 사용하는 함수 및 설정 함수
	|- ...
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
|-hooks				> 비즈니스 로직 중 hook들
	|-useAddLog.js		> 도메인에 상관없이 개별 hook 파일들
|-screens			> 페이지(화면) 최상위 디렉토리
  |- Home			> 해당 화면의 이름
    |- Home.tsx
  |- ...
```
