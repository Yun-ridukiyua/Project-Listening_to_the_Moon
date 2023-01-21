/**
 * 時間の間隔を表すクラス
 */
export class Duration {
    private startSeconds;
    private endSeconds;

    /**
     * 時間の間隔を作成する
     * @param startSeconds 開始時間(s)
     * @param endSeconds 終了時間(s)
     */
    constructor(startSeconds: number, endSeconds: number) {
        if (startSeconds > endSeconds) {
            throw Error("開始時間が終了時間よりも大きいです。");
        }
        this.startSeconds = startSeconds;
        this.endSeconds = endSeconds;
    }

    /**
     * 開始時間を取得
     */
    get start() {
        return this.startSeconds;
    }

    /**
     * 終了時間を取得
     */
    get end() {
        return this.endSeconds;
    }

    /**
     * 時間の間隔を取得する。
     * つまりend-startを取得。
     */
    get duration() {
        return this.endSeconds - this.startSeconds;
    }
}
