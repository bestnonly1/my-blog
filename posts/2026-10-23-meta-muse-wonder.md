---
title: "Meta의 Muse Wonder, OpenAI와 Anthropic의 영역으로"
date: 2026-10-23
tags: [Meta, Muse, AI모델, 에이전트, 프론티어]
excerpt: "Meta가 10월 12일 Muse Wonder를 발표했다. 멀티모달 입력에 백만 토큰 컨텍스트를 지원하는 이 모델은, Meta가 AI 프론티어 경쟁에 본격 진입했음을 보여준다."
---

## Meta가 갑자기 강해졌다

지난 10월 12일, Meta가 **Muse Wonder**와 **Muse Wonder Full**이라는 새 모델을 발표했다. 들었을 때 놀랐다. 단순히 "또 다른 오픈 소스 모델"이 아니라, OpenAI의 GPT-6나 Anthropic의 Claude Opus 5.5와 정면 경쟁하겠다는 선언이었기 때문이다.

## Muse Wonder가 뭔가?

Muse Wonder는 **개인 에이전트와 업무 자동화 전용**으로 만들어진 모델이다. 특이한 점은 입력과 출력이 다르다는 것.

- **입력:** 텍스트, 이미지, 비디오, 오디오 모두 받는다
- **출력:** 텍스트만 내보낸다
- **컨텍스트:** 무려 **100만 토큰**까지 처리 가능

쉽게 말해, 회의 영상과 회의록, 여러 문서를 한 번에 던져주면 정리하고 분석하고 보고서 형태로 뱉어내는 식의 에이전트 일은 이제 한 번에 할 수 있다는 뜻이다.

## 성능이 어느 정도인가?

Meta가 발표한 벤치마크는 솔직히 자화자찬 냄새가 난다. 자신들이 만든 평가 셋에서 자신들 모델을 평가한 거니까. 하지만 수치를 보면:

- **Muse Wonder Full:** Artificial Analysis 지표에서 56점
- **Anthropic Claude Opus 5.5 (최대 버전):** 58점

2%포인트 차이다. 프론티어 모델 그룹에 Meta가 이제 진짜 들어섰다는 뜻이다.

## 접근성과 가격

여기가 중요한데, Meta는 두 가지 전략을 펴고 있다:

1. **Muse Wonder Full** — Meta의 코드 에디터인 "Muse Code" 구독자만 접근 가능 ($50/월 또는 $200/월)
2. **Muse Wonder (표준)** — Meta Model API를 통해 공개. 가격은 입력 100만 토큰당 $4, 출력 100만 토큰당 $20

즉, 엔터프라이즈급 고객은 구독, 개발자는 API로 접근할 수 있게 한 것이다.

## 한국에서는 뭘 해야 하나?

솔직한 생각이다. OpenAI와 Anthropic이 프론티어를 장악한 지 오래지만, 이제 Meta도 진지해졌다. Google과 Microsoft도 있고. 

한국의 AI 기업들은 어디에 있나? Naver의 HyperCLOVA, Kakao의 Karlo 같은 국내 모델들은 여전히 오픈 소스 기반이거나 특정 영역 전문이다. 범용 에이전트 모델로 글로벌 프론티어와 경쟁하는 한국 회사는 아직 없다.

Meta의 Muse Wonder는 "우리도 할 수 있다"는 증명이 되었다. 문제는, 시간이 이미 많이 남지 않았다는 것이다.

Source: [Simon Willison's Weblog - Meta Muse Wonder](https://simonwillison.net/2026/oct/12/llm-meta-ai/)
