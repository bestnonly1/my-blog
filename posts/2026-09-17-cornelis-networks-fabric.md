---
title: "Cornelis Networks의 Active Compute Fabric: AI 인프라의 새로운 경쟁자"
date: 2026-09-17
tags: [AI인프라, 네트워킹, GPU, Nvidia, 오픈소스]
excerpt: "인텔 스핀오프 Cornelis Networks가 2억5천만 달러를 모금하고 Active Compute Fabric을 공개했다. GPU 벤더 종속성을 벗어나고 AI 클러스터의 효율성을 높이는 새로운 네트워킹 기술이 Nvidia의 독점에 도전한다."
---

AI 하드웨어 세계에서는 보통 Nvidia의 이름이 지배적이다. GPU를 만들고, 그 GPU들을 연결하는 네트워크 솔루션도 Nvidia가 주도한다. 그런데 이번주 **Cornelis Networks가 이 판을 흔들 수 있는 기술을 공개**했다.

## Active Compute Fabric이 뭔가

Cornelis Networks(인텔의 스핀오프 회사)가 발표한 **Active Compute Fabric**은 간단히 말해 **GPU들 사이의 "똑똑한" 네트워크**라고 생각하면 된다.

지금까지 AI 클러스터에서는 GPU들이 데이터를 주고받을 때 단순히 "데이터 통로" 역할만 하는 네트워크를 썼다. 하지만 Active Compute Fabric은 **데이터가 지나가면서 그 안에서 계산도 함**. 예를 들어 여러 GPU가 데이터를 합치는 작업(collective operations)을 할 때, 네트워크가 중간에 그걸 처리해주니까 GPU는 더 중요한 일에만 집중할 수 있다.

> 쉽게 말하면, 지금까지는 GPU가 모든 일을 했다면, 이제는 네트워크도 도와주는 거다.

## 왜 이게 중요한가

**Nvidia의 종속성 탈출**

Nvidia의 H100, H200 같은 최고급 GPU들은 비싸고 공급도 부족하다. 그리고 Nvidia가 만드는 네트워킹 솔루션(InfiniBand, NVLink)도 그 GPU들과만 완벽하게 작동하도록 최적화되어 있다.

Cornelis의 Active Compute Fabric은 **어떤 벤더의 GPU든 상관없이 작동**한다. AMD 칩이든, Qualcomm이든, 심지어 앞으로 나올 신생 기업의 GPU든 연결할 수 있다. 이건 고객들에게 엄청난 자유도를 준다.

**효율성 향상**

두 번째는 **이미 가지고 있는 GPU를 더 잘 활용**한다는 점. 현재 많은 AI 데이터센터에서 GPU들이 100% 사용률로 돌지 않는다. 왜냐하면 GPU끼리 통신하고 데이터 조정하는 데 시간이 걸리기 때문. Active Compute Fabric은 이 오버헤드를 줄여줘서, 구입한 GPU들이 더 효율적으로 일할 수 있게 한다.

## 현재 진행 상황

Cornelis가 방금 공개한 제품은 **CN5000**(지금 배송 중)과 **CN6000**(고객 샘플링, 4분기 본격 배포). 대역폭은 각각 400 Gbps와 800 Gbps 수준이다.

무엇보다 중요한 건 2억5천만 달러의 펀딩이다. 이건 이 회사의 시장 진입이 진지하다는 뜻이다.

## 개인적으로

AI 인프라 시장은 지금 **게임 체인저가 필요한 시점**이라고 본다. Nvidia는 정말 훌륭한 기술을 만들었지만, 한 회사가 모든 걸 독점하는 건 건강하지 않다. Cornelis처럼 오픈 표준을 기반으로 경쟁을 일으키는 기업들이 있어야 혁신도 빠르고, 가격도 내려간다.

2026년 후반으로 갈수록 AI 인프라 경쟁이 더 뜨거워질 것 같다.

---

Sources:
- [Cornelis Networks raises $205M and scales up and out with its new Active Compute Fabric - SiliconANGLE](https://siliconangle.com/2026/09/14/cornelis-networks-raises-205m-and-scales-up-and-scales-out-with-its-new-active-compute-fabric/)
- [Cornelis' Lisa Spelman on Active Compute Fabric for AI - Converge Digest](https://convergedigest.com/aiinfrasummit26-cornelis-unveils-active-compute-fabric-for-ai/)
- [Cornelis Networks Raises $205 Million to Challenge Nvidia's AI Infrastructure Dominance - CXO Digitalpulse](https://www.cxodigitalpulse.com/cornelis-networks-raises-205-million-to-challenge-nvidias-ai-infrastructure-dominance/)
