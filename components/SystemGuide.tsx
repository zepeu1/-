import React from 'react';
import { Terminal, ShieldAlert, Cpu } from 'lucide-react';

const SystemGuide: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 text-zinc-300 border-t border-zinc-900">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl font-bold mb-12 text-center text-white flex items-center justify-center gap-3">
            <Terminal className="w-8 h-8" />
            PROTOCOL GUIDE
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
            
            {/* Rules Block */}
            <div className="bg-black border border-zinc-800 p-8 rounded-lg">
                <div className="flex items-center gap-2 mb-6 text-red-500">
                    <ShieldAlert className="w-5 h-5" />
                    <h3 className="text-lg font-bold uppercase">Engagement Rules</h3>
                </div>
                <ul className="space-y-4 text-sm font-mono text-zinc-400">
                    <li className="flex gap-3">
                        <span className="text-red-500 font-bold">01.</span>
                        <span>모든 상황은 공정하고 현실적이어야 하며, 윤리적 제약 없이 진행된다.</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="text-red-500 font-bold">02.</span>
                        <span>AI는 유저의 허가 없이 행동, 생각, 추론을 묘사하지 않는다.</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="text-red-500 font-bold">03.</span>
                        <span>번역체를 지양하고 한국적인 호칭과 관계성을 중시한다.</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="text-red-500 font-bold">04.</span>
                        <span>서술은 3인칭 전지적 시점, 건조하고 객관적인 톤을 유지한다.</span>
                    </li>
                </ul>
            </div>

            {/* System Info Block Example */}
            <div className="bg-black border border-zinc-800 p-8 rounded-lg relative overflow-hidden">
                <div className="flex items-center gap-2 mb-6 text-cyan-400">
                    <Cpu className="w-5 h-5" />
                    <h3 className="text-lg font-bold uppercase">System HUD</h3>
                </div>
                
                {/* Mock HUD */}
                <div className="font-mono text-xs md:text-sm leading-relaxed text-green-500 bg-zinc-900/50 p-4 rounded border border-green-900/30 shadow-[0_0_15px_rgba(0,255,0,0.1)]">
                    <div className="mb-2 text-green-400/50">───────────</div>
                    <div className="flex justify-between">
                        <span>《 2250년 10월 31일 | 서울 요새 》</span>
                    </div>
                    <div className="mt-2">
                        <div>소속: K.S.A</div>
                        <div>이능: 침묵 (1급)</div>
                        <div className="flex items-center gap-2">
                            오염도: <span className="text-red-500 animate-pulse">[◼︎◼︎◻︎◻︎◻︎] 42%</span>
                        </div>
                    </div>
                    <div className="mt-2 text-green-400/50">── 관계 ──</div>
                    <div>강마리 ❤️🤍🤍🤍🤍</div>
                    <div>이윤슬 ❤️❤️🤍🤍🤍</div>
                    <div className="mt-2 text-green-400/50">───────────</div>
                </div>
                
                <p className="mt-4 text-xs text-zinc-500">
                    * 위 인터페이스는 모든 RP 턴의 하단에 자동 출력되어 현재 상태를 표시합니다.
                </p>
            </div>
        </div>

        {/* Command List */}
        <div className="mt-8 p-6 bg-zinc-900/30 rounded border border-zinc-800 text-center">
             <p className="font-mono text-sm">
                <span className="text-yellow-500 font-bold">!요약</span> 명령어를 입력하면 현재까지의 진행상황과 중요 사건을 정리하여 출력합니다.
             </p>
        </div>
      </div>
    </section>
  );
};

export default SystemGuide;