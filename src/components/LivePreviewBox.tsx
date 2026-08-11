'use client';

import { useState } from 'react';
import { Topic } from '../types';

interface LivePreviewBoxProps {
  topic: Topic;
}

export default function LivePreviewBox({ topic }: LivePreviewBoxProps) {
  const topicId = topic.id.toLowerCase();
  const titleLower = topic.title.toLowerCase();

  // Determine category for dynamic canvas rendering
  const isList = topicId.includes('list') || titleLower.includes('list');
  const isTable = topicId.includes('table') || titleLower.includes('table');
  const isFlex = topicId.includes('flex') || titleLower.includes('flex');
  const isGrid = topicId.includes('grid') || titleLower.includes('grid');
  const isPosition = topicId.includes('position') || titleLower.includes('position');
  const isZIndex = topicId.includes('z-index') || titleLower.includes('z-index');
  const isDisplay = topicId.includes('display') || titleLower.includes('display');
  const isOverflow = topicId.includes('overflow') || titleLower.includes('overflow');

  // Interactive States
  // 1. List state
  const [listStyleType, setListStyleType] = useState('disc');
  const [listPadding, setListPadding] = useState(20);

  // 2. Table state
  const [borderCollapse, setBorderCollapse] = useState('collapse');
  const [tableCellPadding, setTableCellPadding] = useState(10);
  const [stripedRows, setStripedRows] = useState(true);

  // 3. Flexbox state
  const [flexDirection, setFlexDirection] = useState<'row' | 'column' | 'row-reverse'>('row');
  const [justifyContent, setJustifyContent] = useState('space-between');
  const [alignItems, setAlignItems] = useState('center');

  // 4. Grid state
  const [gridColumns, setGridColumns] = useState('repeat(3, 1fr)');
  const [gridGap, setGridGap] = useState(12);

  // 5. Position & Z-Index state
  const [posType, setPosType] = useState<'static' | 'relative' | 'absolute'>('relative');
  const [posTop, setPosTop] = useState(10);
  const [posLeft, setPosLeft] = useState(20);
  const [zIndexVal, setZIndexVal] = useState(2);

  // 6. Display & Overflow state
  const [displayVal, setDisplayVal] = useState('block');
  const [overflowVal, setOverflowVal] = useState('auto');

  // 7. General CSS state (Colors, Borders, Radius, Shadows, Transforms)
  const [bgColor, setBgColor] = useState('#1a6fb4');
  const [borderRadius, setBorderRadius] = useState(8);
  const [padding, setPadding] = useState(16);
  const [boxShadow, setBoxShadow] = useState(true);
  const [rotation, setRotation] = useState(0);
  const [opacity, setOpacity] = useState(1);

  // Generate CSS Output Code based on Category
  let generatedCss = '';
  if (isList) {
    generatedCss = `ul {\n  list-style-type: ${listStyleType};\n  padding-left: ${listPadding}px;\n}`;
  } else if (isTable) {
    generatedCss = `table {\n  border-collapse: ${borderCollapse};\n}\ntd, th {\n  padding: ${tableCellPadding}px;\n  border: 1px solid #1a6fb4;\n}`;
  } else if (isFlex) {
    generatedCss = `.container {\n  display: flex;\n  flex-direction: ${flexDirection};\n  justify-content: ${justifyContent};\n  align-items: ${alignItems};\n}`;
  } else if (isGrid) {
    generatedCss = `.container {\n  display: grid;\n  grid-template-columns: ${gridColumns};\n  gap: ${gridGap}px;\n}`;
  } else if (isPosition || isZIndex) {
    generatedCss = `.box {\n  position: ${posType};\n  top: ${posTop}px;\n  left: ${posLeft}px;\n  z-index: ${zIndexVal};\n}`;
  } else if (isDisplay) {
    generatedCss = `.element {\n  display: ${displayVal};\n  background: ${bgColor};\n  padding: ${padding}px;\n}`;
  } else if (isOverflow) {
    generatedCss = `.box {\n  overflow: ${overflowVal};\n  height: 100px;\n  border: 2px dashed #1a6fb4;\n}`;
  } else {
    generatedCss = `background-color: ${bgColor};\nborder-radius: ${borderRadius}px;\npadding: ${padding}px;\nbox-shadow: ${boxShadow ? '0 10px 25px rgba(0,0,0,0.25)' : 'none'};\ntransform: rotate(${rotation}deg);\nopacity: ${opacity};`;
  }

  return (
    <div className="live-preview-box-container">
      <div className="live-preview-header">
        <div className="preview-title">
          <i className="fa-solid fa-flask" /> 🧪 Live Interactive Demo: <strong>{topic.title}</strong>
        </div>
      </div>

      <div className="live-preview-workspace">
        {/* Controls Column */}
        <div className="preview-controls-panel">
          {/* CATEGORY 1: LISTS */}
          {isList && (
            <>
              <div className="control-group">
                <label>list-style-type:</label>
                <select value={listStyleType} onChange={e => setListStyleType(e.target.value)} className="dropdown-lang-select">
                  <option value="disc">disc (default)</option>
                  <option value="circle">circle</option>
                  <option value="square">square</option>
                  <option value="decimal">decimal (numbers)</option>
                  <option value="lower-alpha">lower-alpha (a, b, c)</option>
                  <option value="none">none</option>
                </select>
              </div>
              <div className="control-group">
                <label>padding-left: {listPadding}px</label>
                <input type="range" min="0" max="50" value={listPadding} onChange={e => setListPadding(Number(e.target.value))} />
              </div>
            </>
          )}

          {/* CATEGORY 2: TABLES */}
          {isTable && (
            <>
              <div className="control-group">
                <label>border-collapse:</label>
                <select value={borderCollapse} onChange={e => setBorderCollapse(e.target.value)} className="dropdown-lang-select">
                  <option value="collapse">collapse</option>
                  <option value="separate">separate</option>
                </select>
              </div>
              <div className="control-group">
                <label>cell padding: {tableCellPadding}px</label>
                <input type="range" min="4" max="24" value={tableCellPadding} onChange={e => setTableCellPadding(Number(e.target.value))} />
              </div>
              <div className="control-group-row">
                <label className="checkbox-label">
                  <input type="checkbox" checked={stripedRows} onChange={e => setStripedRows(e.target.checked)} />
                  Striped Rows
                </label>
              </div>
            </>
          )}

          {/* CATEGORY 3: FLEXBOX */}
          {isFlex && (
            <>
              <div className="control-group">
                <label>flex-direction:</label>
                <select value={flexDirection} onChange={e => setFlexDirection(e.target.value as any)} className="dropdown-lang-select">
                  <option value="row">row</option>
                  <option value="column">column</option>
                  <option value="row-reverse">row-reverse</option>
                </select>
              </div>
              <div className="control-group">
                <label>justify-content:</label>
                <select value={justifyContent} onChange={e => setJustifyContent(e.target.value)} className="dropdown-lang-select">
                  <option value="space-between">space-between</option>
                  <option value="center">center</option>
                  <option value="flex-start">flex-start</option>
                  <option value="space-around">space-around</option>
                </select>
              </div>
              <div className="control-group">
                <label>align-items:</label>
                <select value={alignItems} onChange={e => setAlignItems(e.target.value)} className="dropdown-lang-select">
                  <option value="center">center</option>
                  <option value="flex-start">flex-start</option>
                  <option value="stretch">stretch</option>
                </select>
              </div>
            </>
          )}

          {/* CATEGORY 4: GRID */}
          {isGrid && (
            <>
              <div className="control-group">
                <label>grid-template-columns:</label>
                <select value={gridColumns} onChange={e => setGridColumns(e.target.value)} className="dropdown-lang-select">
                  <option value="repeat(3, 1fr)">repeat(3, 1fr)</option>
                  <option value="repeat(2, 1fr)">repeat(2, 1fr)</option>
                  <option value="1fr 2fr">1fr 2fr</option>
                  <option value="80px 1fr 80px">80px 1fr 80px</option>
                </select>
              </div>
              <div className="control-group">
                <label>gap: {gridGap}px</label>
                <input type="range" min="0" max="30" value={gridGap} onChange={e => setGridGap(Number(e.target.value))} />
              </div>
            </>
          )}

          {/* CATEGORY 5: POSITION & Z-INDEX */}
          {(isPosition || isZIndex) && (
            <>
              <div className="control-group">
                <label>position:</label>
                <select value={posType} onChange={e => setPosType(e.target.value as any)} className="dropdown-lang-select">
                  <option value="relative">relative</option>
                  <option value="absolute">absolute</option>
                  <option value="static">static</option>
                </select>
              </div>
              <div className="control-group">
                <label>top: {posTop}px</label>
                <input type="range" min="-20" max="40" value={posTop} onChange={e => setPosTop(Number(e.target.value))} />
              </div>
              <div className="control-group">
                <label>left: {posLeft}px</label>
                <input type="range" min="-20" max="60" value={posLeft} onChange={e => setPosLeft(Number(e.target.value))} />
              </div>
              <div className="control-group">
                <label>z-index: {zIndexVal}</label>
                <input type="range" min="0" max="10" value={zIndexVal} onChange={e => setZIndexVal(Number(e.target.value))} />
              </div>
            </>
          )}

          {/* CATEGORY 6: DISPLAY & OVERFLOW */}
          {isDisplay && (
            <div className="control-group">
              <label>display:</label>
              <select value={displayVal} onChange={e => setDisplayVal(e.target.value)} className="dropdown-lang-select">
                <option value="block">block</option>
                <option value="inline-block">inline-block</option>
                <option value="flex">flex</option>
                <option value="none">none</option>
              </select>
            </div>
          )}

          {isOverflow && (
            <div className="control-group">
              <label>overflow:</label>
              <select value={overflowVal} onChange={e => setOverflowVal(e.target.value)} className="dropdown-lang-select">
                <option value="auto">auto (scroll when needed)</option>
                <option value="scroll">scroll (always scrollbar)</option>
                <option value="hidden">hidden (clip overflow)</option>
                <option value="visible">visible (default overflow)</option>
              </select>
            </div>
          )}

          {/* GENERAL CONTROLS (DEFAULT / PROPERTY TOPICS) */}
          {!isList && !isTable && !isFlex && !isGrid && !isPosition && !isZIndex && !isDisplay && !isOverflow && (
            <>
              <div className="control-group">
                <label>Background Color:</label>
                <div className="color-presets">
                  {['#1a6fb4', '#3b82f6', '#10b981', '#ef4444', '#8b5cf6', '#f59e0b', '#06b6d4'].map(color => (
                    <button
                      key={color}
                      className={`color-chip ${bgColor === color ? 'active' : ''}`}
                      style={{ backgroundColor: color }}
                      onClick={() => setBgColor(color)}
                      title={color}
                    />
                  ))}
                  <input type="color" value={bgColor} onChange={e => setBgColor(e.target.value)} className="color-picker-input" title="Custom Color" />
                </div>
              </div>
              <div className="control-group">
                <label>Border Radius: {borderRadius}px</label>
                <input type="range" min="0" max="50" value={borderRadius} onChange={e => setBorderRadius(Number(e.target.value))} />
              </div>
              <div className="control-group">
                <label>Padding: {padding}px</label>
                <input type="range" min="8" max="40" value={padding} onChange={e => setPadding(Number(e.target.value))} />
              </div>
              <div className="control-group">
                <label>Rotation: {rotation}°</label>
                <input type="range" min="-45" max="45" value={rotation} onChange={e => setRotation(Number(e.target.value))} />
              </div>
              <div className="control-group">
                <label>Opacity: {opacity}</label>
                <input type="range" min="0.2" max="1" step="0.1" value={opacity} onChange={e => setOpacity(Number(e.target.value))} />
              </div>
              <div className="control-group-row">
                <label className="checkbox-label">
                  <input type="checkbox" checked={boxShadow} onChange={e => setBoxShadow(e.target.checked)} />
                  Enable Box Shadow
                </label>
              </div>
            </>
          )}
        </div>

        {/* Live Canvas Column */}
        <div className="preview-canvas-panel">
          <div className="canvas-wrapper">
            {/* CANVAS 1: LISTS */}
            {isList && (
              <ul style={{ listStyleType: listStyleType, paddingLeft: `${listPadding}px`, margin: 0, width: '100%' }}>
                <li style={{ marginBottom: '6px' }}>First HTML List Item</li>
                <li style={{ marginBottom: '6px' }}>Second List Item with Styling</li>
                <li>Third Interactive List Item</li>
              </ul>
            )}

            {/* CANVAS 2: TABLES */}
            {isTable && (
              <table style={{ borderCollapse: borderCollapse as any, width: '100%', textAlign: 'center' }}>
                <thead>
                  <tr style={{ background: '#1a6fb4', color: 'white' }}>
                    <th style={{ padding: `${tableCellPadding}px` }}>Header 1</th>
                    <th style={{ padding: `${tableCellPadding}px` }}>Header 2</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ background: stripedRows ? 'rgba(0,0,0,0.03)' : 'transparent' }}>
                    <td style={{ padding: `${tableCellPadding}px` }}>Data Row 1</td>
                    <td style={{ padding: `${tableCellPadding}px` }}>Value 100</td>
                  </tr>
                  <tr style={{ background: stripedRows ? 'rgba(26,111,180,0.08)' : 'transparent' }}>
                    <td style={{ padding: `${tableCellPadding}px` }}>Data Row 2</td>
                    <td style={{ padding: `${tableCellPadding}px` }}>Value 200</td>
                  </tr>
                </tbody>
              </table>
            )}

            {/* CANVAS 3: FLEXBOX */}
            {isFlex && (
              <div style={{ display: 'flex', flexDirection: flexDirection, justifyContent: justifyContent, alignItems: alignItems, width: '100%', minHeight: '120px', gap: '8px', background: 'rgba(26,111,180,0.08)', padding: '10px', borderRadius: '8px' }}>
                <div style={{ background: '#1a6fb4', color: 'white', padding: '12px 18px', borderRadius: '6px', fontWeight: 600 }}>Box 1</div>
                <div style={{ background: '#3b82f6', color: 'white', padding: '16px 18px', borderRadius: '6px', fontWeight: 600 }}>Box 2</div>
                <div style={{ background: '#10b981', color: 'white', padding: '12px 18px', borderRadius: '6px', fontWeight: 600 }}>Box 3</div>
              </div>
            )}

            {/* CANVAS 4: GRID */}
            {isGrid && (
              <div style={{ display: 'grid', gridTemplateColumns: gridColumns, gap: `${gridGap}px`, width: '100%', padding: '10px', background: 'rgba(26,111,180,0.08)', borderRadius: '8px' }}>
                <div style={{ background: '#1a6fb4', color: 'white', padding: '14px', borderRadius: '6px', textAlign: 'center', fontWeight: 600 }}>Grid Item 1</div>
                <div style={{ background: '#3b82f6', color: 'white', padding: '14px', borderRadius: '6px', textAlign: 'center', fontWeight: 600 }}>Grid Item 2</div>
                <div style={{ background: '#10b981', color: 'white', padding: '14px', borderRadius: '6px', textAlign: 'center', fontWeight: 600 }}>Grid Item 3</div>
              </div>
            )}

            {/* CANVAS 5: POSITION & Z-INDEX */}
            {(isPosition || isZIndex) && (
              <div style={{ position: 'relative', width: '100%', height: '140px', background: 'rgba(0,0,0,0.04)', borderRadius: '8px', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '15px', left: '15px', width: '100px', height: '60px', background: '#e74c3c', color: 'white', borderRadius: '6px', padding: '6px', zIndex: 1, fontWeight: 600, fontSize: '0.8rem' }}>
                  Base Layer (z-index: 1)
                </div>
                <div style={{ position: posType, top: `${posTop}px`, left: `${posLeft}px`, width: '130px', height: '70px', background: '#1a6fb4', color: 'white', borderRadius: '6px', padding: '8px', zIndex: zIndexVal, fontWeight: 600, fontSize: '0.82rem', boxShadow: '0 6px 15px rgba(0,0,0,0.2)' }}>
                  Active Box (z-index: {zIndexVal})
                </div>
              </div>
            )}

            {/* CANVAS 6: DISPLAY & OVERFLOW */}
            {isDisplay && (
              <div style={{ width: '100%', textAlign: 'center' }}>
                <div style={{ display: displayVal as any, background: '#1a6fb4', color: 'white', padding: '12px 20px', borderRadius: '6px', fontWeight: 600, margin: '4px' }}>
                  Interactive Display Element ({displayVal})
                </div>
                <div style={{ display: displayVal as any, background: '#10b981', color: 'white', padding: '12px 20px', borderRadius: '6px', fontWeight: 600, margin: '4px' }}>
                  Sibling Element
                </div>
              </div>
            )}

            {isOverflow && (
              <div style={{ overflow: overflowVal as any, height: '100px', width: '100%', border: '2px dashed #1a6fb4', padding: '10px', borderRadius: '8px', background: 'var(--section-bg)' }}>
                <p style={{ margin: 0, lineHeight: 1.6, fontSize: '0.88rem' }}>
                  This is long scrollable content inside the box. CSS overflow property controls what happens when content exceeds the dimensions of an element container. Test visible, hidden, scroll, and auto options to see overflow behavior in action!
                </p>
              </div>
            )}

            {/* CANVAS GENERAL (PROPERTIES) */}
            {!isList && !isTable && !isFlex && !isGrid && !isPosition && !isZIndex && !isDisplay && !isOverflow && (
              <div
                style={{
                  backgroundColor: bgColor,
                  borderRadius: `${borderRadius}px`,
                  padding: `${padding}px`,
                  boxShadow: boxShadow ? '0 10px 25px rgba(0,0,0,0.25)' : 'none',
                  transform: `rotate(${rotation}deg)`,
                  opacity: opacity,
                  color: '#ffffff',
                  fontWeight: 600,
                  textAlign: 'center',
                  transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                  maxWidth: '240px',
                  width: '100%',
                }}
              >
                <i className="fa-brands fa-css3-alt" style={{ fontSize: '2rem', marginBottom: '6px' }} />
                <div>{topic.title} Canvas</div>
                <div style={{ fontSize: '0.75rem', opacity: 0.8, marginTop: '4px' }}>
                  Interactive Render Canvas
                </div>
              </div>
            )}
          </div>

          {/* Generated CSS Output */}
          <div className="preview-generated-css">
            <div className="css-output-header">Live Output CSS:</div>
            <code>{generatedCss}</code>
          </div>
        </div>
      </div>
    </div>
  );
}
