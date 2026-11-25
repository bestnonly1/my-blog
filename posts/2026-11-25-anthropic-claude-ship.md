---
title: "Anthropic의 Claude Ship — PR 검토부터 승인까지 자동화한다"
date: 2026-11-25
tags: [anthropic, claude, github, 개발자 도구, ai 에이전트]
excerpt: "Anthropic이 11월 24일 Claude Ship을 발표했다. 코드 리뷰부터 CI 오류 대응, 자동 승인까지 GitHub 워크플로우를 지능형 에이전트로 자동화한다."
---

## 개발자의 두 번째 일

**지난 11월 24일, Anthropic이 Claude Ship을 공개했다.** 이름이 조금 낯설지만, 지금 개발 현장에 정확히 필요한 것이다.

PR을 보낸 후 일어나는 모든 일, 즉 **코드 리뷰, 테스트 실패, 충돌 해결, 승인**까지 자동으로 처리하는 에이전트 모음이다.

지금까지 이 모든 과정은 개발자가 직접 하거나, 팀원에게 요청하고 기다려야 했다. 그런데 이제는?

> Claude Ship이 대신한다. 옆에서 기다렸다가, 문제가 보이면 고쳐준다.

## Claude Ship의 세 가지 기능

**첫째: Code Review (이미 일반 공개)**

Anthropic의 Code Review는 이미 존재했다. PR을 분석해서 버그, 성능 문제, 보안 취약점을 찾아낸다. 이제 이게 Claude Ship의 한 부분이 되었다.

**둘째: PR Steward (베타)**

이건 처음이다. PR Steward는:

- **실패한 CI 테스트**를 본다
- **코드 충돌**을 해결한다
- **리뷰 피드백**을 받으면 그에 맞춰 코드를 고쳐본다

사람이 "여기 고쳐 줄래?"라고 댓글을 달면, Claude가 직접 수정해서 커밋한다. (물론 최종 승인은 사람이 한다.)

**셋째: Claude Approvals (베타)**

가장 흥미로운 부분이다. 저장소에 "어떤 PR은 자동으로 승인해도 되는가"라는 정책을 정의할 수 있다.

```
문서 수정, 의존성 버전 올리기, 오타 수정 같은 건 자동으로 승인 OK
```

이 정책을 읽고 Claude Approvals가 판단한다. "이건 그 조건에 맞네" → 자동 승인.

예를 들면, README 파일 수정 같은 "정해진 패턴"은 사람이 일일이 볼 필요가 없어진다.

## 실전에서의 의미

**첫 번째 생각: 개발 속도가 오를 것 같다.**

지금은 많은 개발 팀에서 이 과정 때문에 시간을 낭비한다:

1. PR을 보낸다
2. 테스트가 실패한다
3. 개발자가 그걸 보고 고친다 (또는 며칠 기다린다)
4. 다시 테스트한다
5. 리뷰 받고 또 수정한다
6. 마지막에 승인 받는다

이 중 대부분을 Claude Ship이 처리한다면?

**두 번째 생각: 신뢰할 수 있을까?**

Anthropic은 "관찰 모드(observe-only mode)부터 시작하세요"라고 권장한다. 처음에는 Claude가 뭘 하려고 하는지만 보고, 준비가 되면 자동 승인을 켜는 식이다. 현명한 접근이다.

특히 Claude Approvals는 **정책을 명시적으로 정의해야 한다.** "이 정책이라면 자동 승인"이라는 걸 사람이 미리 정한다는 뜻이다. 임의로 승인하는 게 아니다.

## 왜 이게 중요한가?

**지금은 LLM이 "생각하는 도구"에서 "일하는 도구"로 바뀌고 있다.**

예전에는:

> "Claude한테 물어보면 답변을 해준다"

지금은:

> "Claude가 직접 개발 프로세스의 일부가 된다"

Claude Ship은 이 흐름의 한 가지 사례일 뿐이다. 같은 맥락에서 OpenAI도 agents를 밀어붙이고 있고, Google도 Gemini Enterprise를 agent 플랫폼으로 재포지셔닝했다.

## 개인적으로

한 번 생각해본다. 과연 이게 개발자의 삶을 더 나아지게 할까?

긍정적으로 보면:

- 반복되는 작업(테스트 실패, 충돌 해결 같은)이 사라진다
- 개발자는 "더 중요한 로직" 생각에만 집중할 수 있다
- 버그 리뷰 같은 창의적인 작업도 더 깊게 할 수 있다

부정적으로 보면:

- "AI가 내 코드를 고쳐도 되나?" 하는 심리적 저항이 있을 수 있다
- 세팅을 복잡하게 만들 수도 있다 (정책 정의, 권한 관리 등)

지금 단계에서는 "관찰 모드부터 시작"하는 Anthropic의 권장이 정확하다고 본다. 천천히, 신뢰를 쌓으면서 가야 할 것 같다.

---

[Anthropic: Introducing Claude Ship](https://www.anthropic.com/news/claude-ship)

[Sam on AI: AI Brief - November 24, 2026](https://samonai.substack.com/p/ai-brief-november-24-2026)

[Releasebot: Claude Updates - November 2026](https://releasebot.io/updates/anthropic/claude)
