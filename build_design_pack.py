from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageOps, JpegImagePlugin


ROOT = Path(r"C:\Users\Dell\Desktop\New folder\new warda hand drawn")
OUT = ROOT / "deliverables"
OUT.mkdir(exist_ok=True)


def load_font(name: str, size: int):
    candidates = [
        Path(r"C:\Windows\Fonts") / name,
        Path(r"C:\Windows\Fonts\georgia.ttf"),
        Path(r"C:\Windows\Fonts\arial.ttf"),
    ]
    for candidate in candidates:
        if candidate.exists():
            try:
                return ImageFont.truetype(str(candidate), size=size)
            except OSError:
                continue
    return ImageFont.load_default()


TITLE_FONT = load_font("georgiab.ttf", 50)
SUB_FONT = load_font("georgia.ttf", 24)
LABEL_FONT = load_font("arial.ttf", 22)


def fit_cover(image: Image.Image, size: tuple[int, int]) -> Image.Image:
    return ImageOps.fit(image.convert("RGB"), size, method=Image.Resampling.LANCZOS)


def framed(image_path: Path, size: tuple[int, int]) -> Image.Image:
    image = Image.open(image_path).convert("RGB")
    image = ImageOps.fit(image, size, method=Image.Resampling.LANCZOS)
    frame = Image.new("RGB", (size[0] + 24, size[1] + 24), "#f8f4ee")
    draw = ImageDraw.Draw(frame)
    draw.rounded_rectangle((0, 0, frame.width - 1, frame.height - 1), radius=18, outline="#d9cfc2", width=2)
    frame.paste(image, (12, 12))
    return frame


def add_text(draw: ImageDraw.ImageDraw, xy, text: str, font, fill="#2d2522"):
    draw.text(xy, text, font=font, fill=fill)


def build_overview():
    canvas = Image.new("RGB", (1800, 1200), "#f3ede3")
    draw = ImageDraw.Draw(canvas)
    draw.rounded_rectangle((40, 40, 1760, 1160), radius=40, outline="#d9cfc2", width=2, fill="#fbf8f2")
    add_text(draw, (90, 90), "Warda by Sara", TITLE_FONT)
    add_text(draw, (92, 160), "Website Design Preview", SUB_FONT, fill="#7d5b60")
    add_text(draw, (92, 205), "Arabic-first storefront direction for floral gifting from Egypt.", LABEL_FONT, fill="#5f574f")

    hero = framed(ROOT / "arabic-top-desktop.png", (780, 500))
    mobile = framed(ROOT / "arabic-top-mobile.png", (300, 620))
    custom = framed(ROOT / "custom-size-4.png", (520, 330))
    order = framed(ROOT / "single-order-button.png", (520, 330))

    canvas.paste(hero, (90, 300))
    canvas.paste(mobile, (1340, 260))
    canvas.paste(custom, (90, 840))
    canvas.paste(order, (650, 840))

    add_text(draw, (100, 812), "Desktop landing view", LABEL_FONT)
    add_text(draw, (1350, 230), "Mobile view", LABEL_FONT)
    add_text(draw, (100, 1195 - 325), "Custom bouquet sizing", LABEL_FONT)
    add_text(draw, (660, 1195 - 325), "Checkout panel", LABEL_FONT)

    overview_path = OUT / "warda-design-overview.png"
    canvas.save(overview_path, quality=95)
    return overview_path


def build_custom_board():
    canvas = Image.new("RGB", (1800, 1000), "#f7f1e8")
    draw = ImageDraw.Draw(canvas)
    add_text(draw, (100, 70), "Custom Bouquet Scale", TITLE_FONT)
    add_text(draw, (102, 145), "The sketch grows with the selected bouquet amount.", SUB_FONT, fill="#7d5b60")

    level_small = framed(ROOT / "custom-size-1.png", (760, 520))
    level_large = framed(ROOT / "custom-size-4.png", (760, 520))
    canvas.paste(level_small, (100, 240))
    canvas.paste(level_large, (940, 240))
    add_text(draw, (110, 790), "Lower amount / fewer flowers", LABEL_FONT)
    add_text(draw, (950, 790), "Higher amount / fuller bouquet", LABEL_FONT)

    custom_path = OUT / "warda-custom-comparison.png"
    canvas.save(custom_path, quality=95)
    return custom_path


def build_pdf(image_paths: list[Path]):
    pages = []
    for path in image_paths:
        image = Image.open(path).convert("RGB")
        if image.width > 1800 or image.height > 1800:
            image.thumbnail((1800, 1800), Image.Resampling.LANCZOS)
        pages.append(image)

    pdf_path = OUT / "warda-website-design-pack.pdf"
    pages[0].save(pdf_path, save_all=True, append_images=pages[1:], resolution=160.0)
    return pdf_path


def main():
    overview = build_overview()
    custom_board = build_custom_board()

    export_map = {
        ROOT / "arabic-top-desktop.png": OUT / "warda-hero-desktop.png",
        ROOT / "arabic-top-mobile.png": OUT / "warda-hero-mobile.png",
        ROOT / "arabic-shop-fixed.png": OUT / "warda-shop.png",
        ROOT / "single-order-button.png": OUT / "warda-checkout.png",
        ROOT / "custom-size-1.png": OUT / "warda-custom-small.png",
        ROOT / "custom-size-4.png": OUT / "warda-custom-large.png",
    }

    exported = [overview, custom_board]
    for source, target in export_map.items():
        image = Image.open(source).convert("RGB")
        image.save(target, quality=95)
        exported.append(target)

    pdf_images = [
        overview,
        OUT / "warda-hero-desktop.png",
        OUT / "warda-shop.png",
        custom_board,
        OUT / "warda-checkout.png",
        OUT / "warda-hero-mobile.png",
    ]
    build_pdf(pdf_images)


if __name__ == "__main__":
    main()
