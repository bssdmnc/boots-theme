const fs = require('fs');
const path = require('path');

const baseCss = fs.readFileSync(path.join(__dirname, '../assets/base.css'), 'utf8');
const customCss = fs.readFileSync(path.join(__dirname, '../assets/pearlina-custom.css'), 'utf8');
const config = JSON.parse(fs.readFileSync(path.join(__dirname, 'brand-book.config.json'), 'utf8'));

describe('Brand Book UI Consistency', () => {
  test('header block should use dark green', () => {
    expect(customCss).toContain(`.header__menu-item {`);
    expect(customCss).toContain(config.brand.ui_blocks.header);
  });

  test('hero section should use dark green', () => {
    expect(customCss).toContain(config.brand.ui_blocks.hero.text_color);
    expect(customCss).toContain(config.brand.ui_blocks.hero.background);
  });

  test('hero section should have opacity over', () => {
    expect(customCss).toContain(config.brand.ui_blocks.hero.opacity);
  });

  test('footer should use black', () => {
    expect(customCss).toContain('.footer');
    expect(customCss).toContain(config.brand.ui_blocks.footer);
  });

  test('product CTA should use premium gradient', () => {
    expect(customCss).toContain('.button');
    expect(customCss).toContain(config.brand.ui_blocks.product_cta);
  });

  test('advantages section should use neutral background', () => {
    expect(customCss).toContain('.advantages');
    expect(customCss).toContain(config.brand.ui_blocks.advantages);
  });

  test('size guide banner should use deep green', () => {
    expect(customCss).toContain('.size-guide-banner');
    expect(customCss).toContain(config.brand.ui_blocks.size_guide_banner);
  });

  test('stylist tip block should use bright green', () => {
    expect(customCss).toContain('.stylist-tip');
    expect(customCss).toContain(config.brand.ui_blocks.stylist_tip);
  });
});
