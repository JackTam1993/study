class Promis {

    // 三个状态
    static PENDING = 'pending'
    static FULFILLED = 'fulfilled'
    static REJECT = 'rejected'

    constructor(executor) {
        // executor是一个函数，包括2个函数，resolve + reject

        this.status = this.PENDING;
        executor(this._resolve.bind(this), this._reject.bind(this));
        this.callback = undefined;
    }

    _resolve(value) {
        this.status = this.FULFILLED;

        this.callback && this.callback(value);
    }

    _reject(reason) {
        this.status = this.REJECT;

        this.callback && this.callback(reason);
    }

    then(onFulfilled) {
        // 回调成功的方法
        this.callback = onFulfilled;
        return this;
    }

    catch(onRejected) {
        this.callback = onRejected;
        return this;
    }
}

function fetchData() {
    return new Promis((resolve, reject) => {
        // setTimeout(() => {
        //     resolve('willem');
        // }, 1000);

        setTimeout(() => {
            reject('error');
        }, 1000);
    })
}

fetchData()
    .then((data) => {
        // after 1000ms
        console.log(data); // willem
    })
    .catch((err) => {
        console.log(err)
    })