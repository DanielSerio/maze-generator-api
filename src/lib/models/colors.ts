export class Colors {
  private _black: string = '#1F1D20'
  private _white: string = '#F7F0F0'
  private _transparent: string = 'transparent'
  private _blue: string = '#197BBD'
  private _purple: string = '#9046CF'
  private _pink: string = '#F62DAE'
  private _green: string = '#00A878'
  private _orange: string = '#E07A5F'

  public onColorChange?: () => void

  private handleColorChange = () => {
    if (this.onColorChange) this.onColorChange()
  }

  public get transparent(): string {
    return this._transparent
  }
  public get black(): string { return this._black }
  public set black(value: string) {
    this._black = value
    this.handleColorChange()
  }

  public get white(): string { return this._white }
  public set white(value: string) {
    this._white = value
    this.handleColorChange()
  }

  public get blue(): string { return this._blue }
  public set blue(value: string) {
    this._blue = value
    this.handleColorChange()
  }

  public get purple(): string { return this._purple }
  public set purple(value: string) {
    this._purple = value
    this.handleColorChange()
  }

  public get pink(): string { return this._pink }
  public set pink(value: string) {
    this._pink = value
    this.handleColorChange()
  }
  public get green(): string { return this._green }
  public set green(value: string) {
    this._green = value
    this.handleColorChange()
  }

  public get orange(): string { return this._orange }
  public set orange(value: string) {
    this._orange = value
    this.handleColorChange()
  }
}