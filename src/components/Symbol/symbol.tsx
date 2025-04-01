import { FC } from 'react'

interface Props {
  src: string
}

export const Symbol: FC<Props> = ({ src }) => {
  return (
    <>
      <div
        style={{
          top: '10%',
          left: '10%',
          width: '10%',
          height: '10%',
          opacity: '0.15',
          position: 'absolute',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <img src={src} alt="" />
        </div>
      </div>
      <div
        style={{
          top: '10%',
          right: '10%',
          width: '10%',
          height: '10%',
          opacity: '0.15',
          position: 'absolute',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <img src={src} alt="" />
        </div>
      </div>
      <div
        style={{
          bottom: '10%',
          left: '10%',
          width: '10%',
          height: '10%',
          opacity: '0.15',
          position: 'absolute',
        }}
      >
        <div style={{ width: '100%', height: '100%' }}>
          <img src={src} alt="" />
        </div>
      </div>
      <div
        style={{
          bottom: '10%',
          right: '10%',
          width: '10%',
          height: '10%',
          opacity: '0.15',
          position: 'absolute',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <img src={src} alt="" />
        </div>
      </div>
      <div
        style={{
          top: '50%',
          left: '5%',
          width: '8%',
          height: '8%',
          opacity: '0.15',
          transform: 'translateY(-50%)',
          position: 'absolute',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <img src={src} alt="" />
        </div>
      </div>
      <div
        style={{
          top: '50%',
          right: '5%',
          width: '8%',
          height: '8%',
          opacity: '0.15',
          transform: 'translateY(-50%)',
          position: 'absolute',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <img src={src} alt="" />
        </div>
      </div>
      <div
        style={{
          top: '5%',
          left: '50%',
          width: '8%',
          height: '8%',
          opacity: '0.15',
          transform: 'translateX(-50%)',
          position: 'absolute',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <img src={src} alt="" />
        </div>
      </div>
      <div
        style={{
          bottom: '5%',
          left: '50%',
          width: '8%',
          height: '8%',
          opacity: '0.15',
          transform: 'translateX(-50%)',
          position: 'absolute',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <img src={src} alt="" />
        </div>
      </div>
      <div
        style={{
          top: '12%',
          left: '30%',
          width: '7%',
          height: '7%',
          opacity: '0.15',
          position: 'absolute',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <img src={src} alt="" />
        </div>
      </div>
      <div
        style={{
          top: '12%',
          right: '30%',
          width: '7%',
          height: '7%',
          position: 'absolute',
          opacity: '0.15',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <img src={src} alt="" />
        </div>
      </div>
      <div
        style={{
          top: '12%',
          left: '30%',
          width: '7%',
          height: '7%',
          opacity: '0.15',
          position: 'absolute',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <img src={src} alt="" />
        </div>
      </div>
      <div
        style={{
          bottom: '12%',
          right: '30%',
          width: '7%',
          height: '7%',
          opacity: '0.15',
          position: 'absolute',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <img src={src} alt="" />
        </div>
      </div>
      <div
        style={{
          top: '30%',
          left: '12%',
          width: '7%',
          height: '7%',
          opacity: '0.15',
          position: 'absolute',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <img src={src} alt="" />
        </div>
      </div>
      <div
        style={{
          top: '30%',
          right: '12%',
          width: '7%',
          height: '7%',
          opacity: '0.15',
          position: 'absolute',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <img src={src} alt="" />
        </div>
      </div>

      <div
        style={{
          bottom: '25%',
          left: '25%',
          width: '6%',
          height: '6%',
          opacity: '0.15',
          position: 'absolute',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <img src={src} alt="" />
        </div>
      </div>
      <div
        style={{
          bottom: '25%',
          right: '25%',
          width: '6%',
          height: '6%',
          opacity: '0.15',
          position: 'absolute',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <img src={src} alt="" />
        </div>
      </div>
    </>
  )
}
