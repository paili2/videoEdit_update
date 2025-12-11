// export default function ContactPage() {
//   return (
//     <section className="space-y-8 pt-4">
//       <header className="space-y-2">
//         <p className="text-xs uppercase tracking-[0.18em] text-purple-200">
//           contact
//         </p>
//         <h1 className="text-2xl font-semibold md:text-3xl">
//           작업 문의 &amp; 연락
//         </h1>
//         <p className="max-w-xl text-sm text-white/70">
//           편하게 편집 스타일이 맞을지, 일정과 예산이 어떻게 될지부터 이야기
//           나눠봐요. 단순 문의도 언제든 환영입니다.
//         </p>
//       </header>

//       <div className="grid gap-8 md:grid-cols-2">
//         {/* 왼쪽 – 연락 수단 카드 */}
//         <div className="space-y-4">
//           <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
//             <h2 className="text-sm font-semibold text-white/90">이메일</h2>
//             <p className="mt-2 text-sm text-white/80">
//               ✉️{" "}
//               <a
//                 href="mailto:your-email@example.com"
//                 className="underline underline-offset-4 decoration-purple-300"
//               >
//                 your-email@example.com
//               </a>
//             </p>
//             <p className="mt-1 text-[11px] text-white/60">
//               작업 문의 시, 대략적인 영상 길이 / 레퍼런스 / 일정 등을 함께
//               보내주시면 더 빠르게 답변드릴 수 있어요.
//             </p>
//           </div>

//           <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
//             <h2 className="text-sm font-semibold text-white/90">인스타그램</h2>
//             <p className="mt-2 text-sm text-white/80">
//               📷{" "}
//               <a
//                 href="https://instagram.com/your-instagram"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="underline underline-offset-4 decoration-purple-300"
//               >
//                 @your-instagram
//               </a>
//             </p>
//             <p className="mt-1 text-[11px] text-white/60">
//               DM으로도 문의 가능하지만, 일정 협의는 이메일이 가장 안정적입니다.
//             </p>
//           </div>

//           <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
//             <h2 className="text-sm font-semibold text-white/90">기타</h2>
//             <p className="mt-2 text-sm text-white/80">
//               카카오톡 오픈채팅, 노션 링크 등은 필요 시 별도로 공유드리고
//               있어요.
//             </p>
//           </div>
//         </div>

//         {/* 오른쪽 – 간단한 문의 폼 스타일 (실제 전송은 X, 디자인용) */}
//         <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
//           <h2 className="text-sm font-semibold text-white/90">
//             간단 문의폼 (디자인용)
//           </h2>
//           <p className="mt-1 text-[11px] text-white/60">
//             실제 전송은 이메일로 처리되고, 이곳은 폼 스타일 예시입니다.
//           </p>

//           <form className="mt-4 space-y-4">
//             <div className="space-y-1 text-sm">
//               <label className="text-xs text-white/70">이름 또는 닉네임</label>
//               <input
//                 type="text"
//                 className="w-full rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm outline-none ring-purple-400/40 focus:border-purple-300 focus:ring-2"
//                 placeholder="예: 또랭 / Seoryeong"
//               />
//             </div>

//             <div className="space-y-1 text-sm">
//               <label className="text-xs text-white/70">이메일</label>
//               <input
//                 type="email"
//                 className="w-full rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm outline-none ring-purple-400/40 focus:border-purple-300 focus:ring-2"
//                 placeholder="답변을 받을 이메일 주소"
//               />
//             </div>

//             <div className="space-y-1 text-sm">
//               <label className="text-xs text-white/70">문의 내용</label>
//               <textarea
//                 className="min-h-[120px] w-full rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm outline-none ring-purple-400/40 focus:border-purple-300 focus:ring-2"
//                 placeholder="예) 브이로그 편집 문의드립니다. 길이는 10분 내외이고, 레퍼런스는 ..."
//               />
//             </div>

//             <button
//               type="button"
//               className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 px-6 py-2 text-sm font-semibold text-black shadow-lg shadow-purple-500/30"
//             >
//               예시 폼 · 실제 문의는 이메일로
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }
