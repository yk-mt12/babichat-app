export const readAloud = (text: string) => {
  // ブラウザにWeb Speech API Speech Synthesis機能があるか判定
  if ('speechSynthesis' in window) {
    // 発言を設定 (必須)
    const uttr = new SpeechSynthesisUtterance()

    // テキストを設定 (必須)
    uttr.text = text

    // 言語を設定
    uttr.lang = 'ja-JP'

    // 速度を設定
    uttr.rate = 1

    // 高さを設定
    uttr.pitch = 1

    // 音量を設定
    uttr.volume = 1

    // 発言を再生 (必須)
    window.speechSynthesis.speak(uttr)
  }
}
