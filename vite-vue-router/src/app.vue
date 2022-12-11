<template>
    <div>
        Hello Vite Vue2
        <div>{{ name }}</div>
        <div>{{ res }}</div>
        <hr>
        <div>测试包转es5：{{ assignData }}</div>
        <hr>
        <div>测试路由:<br />
            <router-link to="/home">Go to home</router-link> <br />
            <router-link to="/about">Go to about</router-link> <br />
            <router-link to="/dashboard">Go to dashboard</router-link>
        </div>
        <div>page:
            <router-view />
        </div>
        <hr>
        <div>
            测试proxy:
            <p>{{ decimalNum }}</p>
        </div>
    </div>
</template>

<script>
import ObjectAssignDeep from 'object-assign-deep'

export default {
    created() {
        const n = 1
        const count = (num) => {
            return num + n
        }
        const res = count(count(count(0)))
        console.log("res", res)
        this.res = res

        this.testModules()
        this.testProxy()
    },
    data() {
        return {
            name: "tg test",
            res: 0,
            assignData: {},
            decimalNum: 0
        }
    },
    methods: {
        testModules() {
            console.log("ObjectAssignDeep", ObjectAssignDeep)
            const b = { x: 1 }
            const a = {
                s: {
                    d: 2,
                    b
                }
            }
            this.assignData = ObjectAssignDeep(a)

        },
        testProxy() {
            this.decimalNum = new Decimal('0.1').sub(new Decimal('0.2'))
        }
    }
}
</script>