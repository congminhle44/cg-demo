import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { config } from '../config'
import axios from 'axios'
import Loading from '../components/Loading'

const Dashboard = () => {
  const [isLoginValid, setIsLoginValid] = useState(false)
  const [isFetching, setIsFetching] = useState(false)
  const [videoUrl, setVideoUrl] = useState('')
  const [linkData, setLinkData] = useState()
  const location = useLocation()

  const guildBoardRef = useRef()
  const pcRef = useRef()
  const barRef = useRef()
  const tableRef = useRef()
  const videoInputRef = useRef()

  useEffect(() => {
    if (location?.state) {
      if (location.state.password === config.adminPassword)
        setIsLoginValid(true)
    } else {
      return
    }
  }, [location?.state])
  useEffect(() => {
    handleFetchLinks()
    setVideoUrl(`${config.apiHost}/demo-video.mp4`)
  }, [])

  const handleFetchLinks = () => {
    setIsFetching(true)
    return axios
      .get(`${config.apiHost}/api/links`)
      .then((response) => {
        setLinkData(response.data)
      })
      .catch((err) => console.log(err))
      .finally(() => setIsFetching(false))
  }

  const handleUpdateLink = (name, data) => {
    setIsFetching(true)
    return axios
      .patch(`${config.apiHost}/api/links/${name}`, data)
      .then((res) => alert('success'))
      .catch((err) => console.log(err))
      .finally(() => setIsFetching(false))
  }

  const onPreviewVideo = (e) => {
    if (e.target?.files[0]) {
      if (e.target?.files[0].type !== 'video/mp4')
        return alert('Please choose correct type of file!')
      const url = URL.createObjectURL(e.target.files[0])
      setVideoUrl(url)
    }
  }

  const handleUploadVideo = () => {
    if (videoInputRef?.current.files[0]) {
      if (videoInputRef?.current.files[0].type !== 'video/mp4')
        return alert('Please choose correct type of file!')
      setIsFetching(true)
      const formData = new FormData()
      formData.append('video', videoInputRef?.current.files[0])
      return axios
        .post(`${config.apiHost}/api/demo-video`, formData)
        .then((res) => alert(res.data.message))
        .catch((err) => console.log(err))
        .finally(() => setIsFetching(false))
    }
  }

  return (
    <div>
      {isFetching && <Loading />}
      {isLoginValid && linkData ? (
        <div className="dashboard-container">
          <h1>Umedalabo Dashboard</h1>
          <div className="dashboard-items">
            <div>
              <h3>Manage links</h3>
              <div className="links">
                <div className="link">
                  <img
                    src="/assets/SCR-20230422-lsox.jpeg"
                    alt="counter-table001"
                  />
                  <div>
                    <label htmlFor="guildboard">
                      <b>Guildboard link</b>
                    </label>
                    <div className="input-wrap">
                      <input
                        type="text"
                        name="guildboard"
                        placeholder="Enter guildboard link"
                        defaultValue={linkData['guildboard']}
                        ref={guildBoardRef}
                      />
                    </div>
                    <button
                      onClick={() =>
                        handleUpdateLink('guildboard', {
                          link: guildBoardRef?.current?.value
                        })
                      }
                      className="submit-btn"
                    >
                      Save
                    </button>
                  </div>
                </div>
                <div className="link">
                  <img src="/assets/SCR-20230422-lsre.jpeg" alt="PC001" />
                  <div>
                    <label htmlFor="PC001">
                      <b>PC link</b>
                    </label>
                    <div className="input-wrap">
                      <input
                        type="text"
                        name="PC001"
                        placeholder="Enter PC link"
                        defaultValue={linkData['PC001']}
                        ref={pcRef}
                      />
                    </div>
                    <button
                      onClick={() =>
                        handleUpdateLink('PC001', {
                          link: pcRef?.current?.value
                        })
                      }
                      className="submit-btn"
                    >
                      Save
                    </button>
                  </div>
                </div>
                <div className="link">
                  <img src="/assets/SCR-20230422-lsle.jpeg" alt="bar001" />
                  <div>
                    <label htmlFor="bar001">
                      <b>Bar link</b>
                    </label>
                    <div className="input-wrap">
                      <input
                        type="text"
                        name="bar001"
                        placeholder="Enter Bar link"
                        defaultValue={linkData['bar001']}
                        ref={barRef}
                      />
                    </div>
                    <button
                      onClick={() =>
                        handleUpdateLink('bar001', {
                          link: barRef?.current?.value
                        })
                      }
                      className="submit-btn"
                    >
                      Save
                    </button>
                  </div>
                </div>
                <div className="link">
                  <img src="/assets/SCR-20230422-lsgt.jpeg" alt="guildboard" />
                  <div>
                    <label htmlFor="counter-table00">
                      <b>Counter table link</b>
                    </label>
                    <div className="input-wrap">
                      <input
                        type="text"
                        name="counter-table001"
                        placeholder="Enter counter table link"
                        defaultValue={linkData['counter-table001']}
                        ref={tableRef}
                      />
                    </div>
                    <button
                      onClick={() =>
                        handleUpdateLink('counter-table001', {
                          link: tableRef?.current?.value
                        })
                      }
                      className="submit-btn"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
              <div className="demo-video"></div>
            </div>
            <div>
              <h3>Video Manage</h3>
              <video
                src={videoUrl}
                width={640}
                height={360}
                autoPlay
                controls
                muted
                crossOrigin="anonymous"
              />
              <div className="upload-video">
                <input
                  ref={videoInputRef}
                  type="file"
                  onChange={onPreviewVideo}
                  accept="video/mp4"
                />
                <button className="submit-btn" onClick={handleUploadVideo}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        'Not found'
      )}
    </div>
  )
}

export default Dashboard
