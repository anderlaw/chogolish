import { observer } from 'mobx-react-lite'
import { createContext, useContext } from "react"
import { observable, computed, action, flow, makeObservable, makeAutoObservable } from "mobx"
export class RootStore {
    //name space `module`_`property`
    _addURLDialog_open: boolean = false
    constructor() {
        makeAutoObservable(this)
    }
    get addURLDialog_open() {
        return this._addURLDialog_open
    }
    /**
     * 更新addURLDialog的关闭
     * @param value 
     */
    update_addURLDialog_open(value: boolean) {
        this._addURLDialog_open = value
    }

    _categoryDialog_open: boolean = false
    get categoryDialog_open() {
        return this._categoryDialog_open
    }
    /**
     * 更新categoryDialog的关闭
     * @param value 
     */
    update_categoryDialog_open(value: boolean) {
        this._categoryDialog_open = value
    }
}

export const StoreContext = createContext<RootStore>(new RootStore())
