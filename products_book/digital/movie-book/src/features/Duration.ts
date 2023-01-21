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
        this.startSeconds = startSeconds;
        this.endSeconds = endSeconds;
    }

    get start() {
        return this.startSeconds;
    }

    get end() {
        return this.endSeconds;
    }

    /**
     * 時間の間隔を取得する
     * @returns 間隔
     */
    public getDuration() {
        return this.endSeconds - this.startSeconds;
    }
}
