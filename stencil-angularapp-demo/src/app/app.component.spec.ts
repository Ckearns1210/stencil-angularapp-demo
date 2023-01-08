import { MyComponent } from './../libs/stencil-generated/proxies'
import { AppModule } from './app.module'
import { AppComponent } from './app.component'
import { Shallow } from 'shallow-render'

describe('AppComponent', () => {
  let shallow: Shallow<AppComponent>
  beforeEach(async () => {
    shallow = new Shallow(AppComponent, AppModule)
  })

  it('should create the app', async () => {
    const { find } = await shallow.render()
    expect(find(MyComponent)).toHaveFoundOne()
  })
})
