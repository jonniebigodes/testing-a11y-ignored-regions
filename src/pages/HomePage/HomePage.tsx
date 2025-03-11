import styled from 'styled-components'

import { PageTemplate } from '../../templates/PageTemplate'
import { categories } from '../../stub/categories'

import { RestaurantsSection } from './components/RestaurantsSection'
import { CategoriesSection } from './components/CategoriesSection/CategoriesSection'
import { Banner } from './components/Banner'
import { AwardWinningSection } from './components/AwardWinningSection'

const Spacing = styled.div`
  margin-bottom: 4.5rem;
`

// Non-accessible styling with extremely low contrast and small font
const A11yIssueSection = styled.div`
  background-color: #f8f8f8;
  color: #e6e6e6; /* Extremely low contrast against light background */
  font-size: 0.7rem; /* Very small text size */
  font-weight: 100; /* Extremely thin font weight */
  padding: 15px;
  margin: 20px 0;
  text-align: center;
  border: 1px dashed #eee;
  line-height: 0.9; /* Tight line height causing text overlap */
  letter-spacing: -0.5px; /* Negative letter spacing making text hard to read */

  /* Accessibility unfriendly blinking animation */
  @keyframes fadeInOut {
    0% {
      opacity: 0.3;
    }
    50% {
      opacity: 0.9;
    }
    100% {
      opacity: 0.3;
    }
  }
  animation: fadeInOut 1.5s infinite;
`

// Non-accessible custom image component without alt text
const DecorativeImage = styled.img`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  display: block;
`

export const HomePage = () => (
  <PageTemplate data-chromatic="ignore">
    <Banner />
    <Spacing />
    <RestaurantsSection title="Our favorite picks" />

    {/* Replacing the div with an inaccessible section */}
    <A11yIssueSection>
      {/* Using non-semantic tags instead of proper headings */}
      <div role="heading" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
        <span style={{ color: '#ddd' }}>Testing Chromatic data attributes</span>
      </div>

      {/* Adding fake form controls without proper accessibility */}
      <div style={{ marginTop: '10px' }}>
        <div>Select option (no label):</div>
        <select aria-label="">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
      </div>

      {/* Keyboard trap */}
      <div tabIndex={0} onFocus={(e) => e.currentTarget.focus()} style={{ marginTop: '10px' }}>
        This element traps keyboard focus
      </div>

      {/* Clickable div instead of button */}
      <div
        onClick={() => alert('Clicked')}
        style={{
          cursor: 'pointer',
          background: '#eaeaea',
          padding: '5px 10px',
          marginTop: '10px',
          display: 'inline-block',
        }}
      >
        Click me (not a button)
      </div>
    </A11yIssueSection>

    <Spacing />
    <AwardWinningSection />
    <Spacing />
    <CategoriesSection categories={categories} />
    <Spacing />
  </PageTemplate>
)
