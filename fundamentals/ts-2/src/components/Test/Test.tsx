import React, {
  FC,
  memo,
  MouseEvent,
  ReactElement,
  useEffect,
  useLayoutEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
  MemoExoticComponent,
} from 'react'
import { Dispatch } from 'redux'
import { connect, useDispatch } from 'react-redux'
// import { PropTypes } from 'prop-types'
import { Alert, Row, Col, Button, Container } from 'react-bootstrap'
import { I_Test } from '../../contracts/Test'

import { T_StoreState } from './../../contracts/StoreState'
import { I_Article } from './../../contracts/Article'
import { T_ActionResponse } from './../../contracts/ActionResponse'
import * as ActionTypes from './../../static/actionTypes/actionTypes'
import * as Actions from './../../store/actions/action'

const Test: FC<I_Test> = (props): ReactElement => {
  const [mainHeading, setMainHeading] = useState<string | null>(
    'Testing Section',
  )
  const [toggler, setToggler] = useState<boolean>(false)
  const title = useRef(null)

  //   const createArticle: Dispatch<any> = useDispatch()

  useEffect(() => {
    console.log('Test - Use Layout Effect Fired')
    let article: I_Article = props?.articles
    console.log(article)
    return () => {
      console.log('Test - Use Layout Effect - Cleaned')
    }
  }, [])

  useEffect(() => {
    console.log('Test - Toggler Set')
    return () => {
      console.log('Test - Cleanup after Toggler Setting')
    }
  }, [toggler])

  useLayoutEffect(() => {
    console.log('Test - Use Effect Fired')
    return () => {
      console.log('Test - Use Effect - Cleaned')
    }
  }, [])

  const onClickHandler = useCallback((event: MouseEvent<HTMLElement>): void => {
    event.preventDefault()
    setToggler(!toggler)
  }, [])

  const getButton: Function = (): ReactElement => {
    return (
      <>
        <Row>
          <Button onClick={onClickHandler}>Press Me</Button>
        </Row>
      </>
    )
  }

  return (
    <>
      <Container style={{ margin: '30px' }}>
        <h1 ref={title}> {mainHeading} </h1>
        <br />
        {getButton()}
        <br />
        <div>
          <h2>{toggler.toString()}</h2>
        </div>
        <br />
        <Row>
          <Col>
            <Alert variant="primary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              inventore consequuntur, ratione quisquam sit alias consequatur
              atque facere commodi, qui doloremque ipsum reiciendis cum
              dignissimos illum et, deleniti quae quidem!
            </Alert>
          </Col>
          <Col lg={8} xs={8} sm={8} md={8}>
            <Alert variant="secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              inventore consequuntur, ratione quisquam sit alias consequatur
              atque facere commodi, qui doloremque ipsum reiciendis cum
              dignissimos illum et, deleniti quae quidem!
            </Alert>
          </Col>
        </Row>
        <Row>
          <Col>
            <Alert variant="warning">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              inventore consequuntur, ratione quisquam sit alias consequatur
              atque facere commodi, qui doloremque ipsum reiciendis cum
              dignissimos illum et, deleniti quae quidem!
            </Alert>
          </Col>
          <Col xs={6}>
            <Alert variant="success">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              inventore consequuntur, ratione quisquam sit alias consequatur
              atque facere commodi, qui doloremque ipsum reiciendis cum
              dignissimos illum et, deleniti quae quidem!
            </Alert>
          </Col>
          <Col>
            <Alert variant="danger">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              inventore consequuntur, ratione quisquam sit alias consequatur
              atque facere commodi, qui doloremque ipsum reiciendis cum
              dignissimos illum et, deleniti quae quidem!
            </Alert>{' '}
          </Col>
        </Row>
        <Row>
          <Col>
            <Alert variant="info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              inventore consequuntur, ratione quisquam sit alias consequatur
              atque facere commodi, qui doloremque ipsum reiciendis cum
              dignissimos illum et, deleniti quae quidem!
            </Alert>
          </Col>
        </Row>
      </Container>
    </>
  )
}

// Test.propTypes = {
//   name: PropTypes.string,
// }

const mapStateToProps = (state: T_StoreState) => ({
  articles: state.articles,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addArticle: (article: I_Article): T_ActionResponse =>
    Actions.addArticle(dispatch, article),
})

export default connect(mapStateToProps, mapDispatchToProps)(Test)
