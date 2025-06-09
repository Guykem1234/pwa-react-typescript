

class AppLayout {
    readonly size?: 'sm'

    constructor(size?: 'sm') { this.size = size }

    get appBar() { return { height: this.size === 'sm' ? 55 : 65 } }

    get logoAppBar() { return { height: 55 } }

    get insightAppBar() { return { height: this.size === 'sm' ? this.appBar.height + this.logoAppBar.height : this.appBar.height } }

    get breadcrumbs() { return { height: 20, marginTop: 10, marginBottom: 10 } }

    private calcHeightLeftover(includeBreadcrumbs: boolean) {
        if (includeBreadcrumbs) { return `calc(100vh - ${this.insightAppBar.height + this.breadcrumbs.height + this.breadcrumbs.marginTop + this.breadcrumbs.marginBottom}px - 10px)` }
        return `calc(100vh - ${this.insightAppBar.height}px)`
    }

    get reports() {
        return {
            filter: { minHeight: 64, },
            report: { padding: 20, minHeight: `calc(${this.calcHeightLeftover(true)} - ${144}px)`, }, height: this.calcHeightLeftover(true)
        }
    }

    get pressControl() { return { height: this.calcHeightLeftover(true) } }

    get menuDrawer() { return { height: this.calcHeightLeftover(false), top: this.appBar.height } }

}

const getAppLayout = (size?: 'sm') => new AppLayout(size)

export default getAppLayout